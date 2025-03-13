import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist } from './entities/wishlist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { async } from 'rxjs';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class WishlistsService {
  constructor(
        @InjectRepository(Wishlist) private readonly wishListRepository: Repository<Wishlist>,
        @InjectRepository(Product) private readonly productRepository: Repository<Product>,
        @InjectRepository(User) private readonly userRepository: Repository<User>
      ) { }

  async create(createWishlistDto: CreateWishlistDto) {
    const product=await this.productRepository.findOneBy({id:createWishlistDto.productId});
    
    const user=await this.userRepository.findOneBy({id:createWishlistDto.userId});
    if(!product){
      throw new NotFoundException('product doesnt exist');

    }
    else if(!user){
      throw new NotFoundException('user doesnt exist');
    }
    return this.wishListRepository.save({... createWishlistDto,product,user});
  }

  async findAll(userId?:number,productId?:number) {
   const options : FindManyOptions<Wishlist> = {
         relations: {
           user: true,
           product:true
         } 
       }
   
       if(productId) {
         options.where = {
             product: {
               id: productId
             }
         }
       }

       if(userId) {
        options.where = {
            user: {
              id: userId
            }
        }
      }
   console.log(options);
   
       const [ wishlist, total ] = await this.wishListRepository.findAndCount(options)
   
       return {
        wishlist,
         total
       };
  }

  async findOne(userId?:number,productId?:number) {
    const wishlistItem=await this.wishListRepository.findOneBy({product:{id:productId},user:{id:userId}});
    if(!wishlistItem){
      throw new NotFoundException('Product with that id doesn´t exist');
    }
    return wishlistItem ;
    }

  /*update(id: number, updateWishlistDto: UpdateWishlistDto) {
    return `This action updates a #${id} wishlist`;
  }*/

  async remove(userId?:number,productId?:number) {
    const wishlistItem=await this.findOne(userId,productId);
    if(!wishlistItem){
      throw new NotFoundException('No results')
    }
    return this.wishListRepository.remove(wishlistItem);
  }
}

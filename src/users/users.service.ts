import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }
    
  async create(createUserDto: CreateUserDto) {
    const user=await this.userRepository.findOne({where:{email:createUserDto.email}});
    if(user){
      throw new ConflictException('The user with this email already exists');
    }
    return this.userRepository.save(createUserDto)
  }

  async findAll(email?:string,username?:string) {

    const whereOptions: FindOptionsWhere<User> = {};

    if (username) {
      whereOptions.username = username; // Filtrar por username
    }
  
    if (email) {
      whereOptions.email = email; // Filtrar por email
    }
    
    const options : FindManyOptions<User> = {
          where:whereOptions,
          order: {
            id: 'ASC'
          },
        }
     
        const [ users, total ] = await this.userRepository.findAndCount(options)
    
        return {
          users: users,
          total
        }
  }

  async findOne(id: number) {
    const user=await this.userRepository.findOne({where:{id:id}});
       if(!user){
         throw new NotFoundException('Product with that id doesn´t exist');
       }
       return user ;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user=await this.findOne(id);
    Object.assign(user,updateUserDto);
    return await this.userRepository.save(user)
    ;
  }

  async remove(id: number) {
    const user=await this.findOne(id);
    return await this.userRepository.remove(user);
    ;
  }
}

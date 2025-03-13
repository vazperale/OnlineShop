import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { GetWishlistQueryDto } from './dto/getWishlistQueryDto';

@Controller('wishlists')
export class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}

  @Post()
  create(@Body() createWishlistDto: CreateWishlistDto) {
    return this.wishlistsService.create(createWishlistDto);
  }

  @Get()
  findAll(@Query()query:GetWishlistQueryDto) {
    const userId=query.userId?query.userId:undefined;
    const productId=query.productId?query.productId:undefined;

    return this.wishlistsService.findAll(userId,productId);
  }

  /*@Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishlistsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWishlistDto: UpdateWishlistDto) {
    return this.wishlistsService.update(+id, updateWishlistDto);
  }*/

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishlistsService.remove(+id);
  }
}

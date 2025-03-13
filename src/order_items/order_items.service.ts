import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from './entities/order_item.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem) private readonly orderItemRepository: Repository<OrderItem>,
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) { }

  async create(createOrderItemDto: CreateOrderItemDto) {
    const product = await this.productRepository.findOneBy({ id: createOrderItemDto.productId });
    const order = await this.orderRepository.findOneBy({ id: createOrderItemDto.orderId });
    if (!product) {
      throw new NotFoundException('This product doesnt exists');
    }

    if (!order) {
      throw new NotFoundException('This order doesnt exists');
    }
    return this.orderItemRepository.save({...createOrderItemDto,order,product});
  }

  async findAll(orderId?: number) {

    const options: FindManyOptions<OrderItem> = {
      relations:{order:true,product:true},
      order: {
        id: 'ASC'
      },
    }

    if (orderId) {
      options.where = {
        order: {
          id: orderId
        }
      }
    }
    const [orderItems, total] = await this.orderItemRepository.findAndCount(options)

    return {
      orderItems: orderItems,
      total
    }
  }

  async findOne(id: number) {
    const orderItem = await this.orderItemRepository.findOne({ where: { id: id }, relations: { order: true } });
    if (!orderItem) {
      throw new NotFoundException('order Item with that id doesn´t exist');
    }
    return orderItem;
  }

  async update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    const orderItem=await this.findOne(id);
    Object.assign(orderItem,updateOrderItemDto);

    if(updateOrderItemDto.productId){
      const product =await this.productRepository.findOneBy({id:updateOrderItemDto.productId});

      if(!product){
        throw new NotFoundException('This product doesn´t exist');

      }
    }
    return await this.productRepository.save(orderItem) ;
  }

  async remove(id: number) {
    const orderItem = await this.findOne(id);
    return await this.orderItemRepository.remove(orderItem);
  }
}

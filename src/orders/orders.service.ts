import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async create(createOrderDto: CreateOrderDto) {
    const user = await this.userRepository.findOneBy({ id: createOrderDto.userId });
    if (!user) {
      let errors: string[] = [];
      errors.push('user doesn´t exist');
      throw new NotFoundException(errors);
    }
    return this.orderRepository.save({ ...createOrderDto, user });
  }

  async findAll(userId?: number) {

    const options: FindManyOptions<Order> = {
      relations: {
        user: true
      },
      order: {
        id: 'ASC'
      },
    }

    if(userId) {
      options.where = {
          user: {
            id: userId
          }
      }
    }
    const [orders, total] = await this.orderRepository.findAndCount(options)

    return {
      orders: orders,
      total
    }
  }

  async findOne(id: number) {
    const order = await this.orderRepository.findOne({ where: { id: id }, relations: { user: true } });
    if (!order) {
      throw new NotFoundException('order with that id doesn´t exist');
    }
    return order;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

import { Order } from "src/orders/entities/order.entity"
import { Product } from "src/products/entities/product.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: 'public' })
export class OrderItem {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'decimal'})
    quantity:number

    @Column({type:'decimal'})
    totalPrice:number

    @Column({type:'decimal'})
    productId:number

    @ManyToOne(()=>Order)
    order:Order

    @ManyToOne(() => Product,{ nullable: false }) 
    @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
    product: Product;
}

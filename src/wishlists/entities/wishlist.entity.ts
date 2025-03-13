import { Product } from "src/products/entities/product.entity"
import { User } from "src/users/entities/user.entity"
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: 'public' })
export class Wishlist {
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>User)
    user:User

    @ManyToOne(()=>Product)
    product:Product
}

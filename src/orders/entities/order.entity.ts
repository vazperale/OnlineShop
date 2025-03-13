import { User } from "src/users/entities/user.entity"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

@Entity({ schema: 'public' })
export class Order {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'decimal'})
    totalAmount:number

    @ManyToOne(()=>User)
    user:User
}

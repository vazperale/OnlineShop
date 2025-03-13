import { Category } from "src/categories/entities/category.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: 'public' })
export class Product {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar',length:60})
    name:string

    @Column({type:'varchar',length:60})
    image:string

    @Column({type:'decimal'})
    price:number

    @Column({type:'decimal'})
    stock:number

    @ManyToOne(()=>Category)
    category:Category
}

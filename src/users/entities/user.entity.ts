import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'public' })
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar',length:30})
    username:string

    @Column({type:'varchar',length:40})
    email:string

    @Column({type:'varchar',length:20})
    dateBirth:string
    
    @Column({type:'varchar',length:100})
    address:string

}

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@ObjectType()
export class Post {
  @Field(() => Int, { description: 'Identificador (placeholder)' })
  id: number;
  
  @Field(() => Int, { description: 'Tittle (placeholder)' })
  tittle: string;

  @Field(() => Int, { description: 'Tema (placeholder)' })
  theme: string;

}

/*@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tittle: string;

  @Column()
  theme: string;

  @Column()
  datePublication: Date;

}*/



import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@ObjectType()
export class Author {
  
  @Field(() => Int, { description: 'Identificador (placeholder)' })
  id: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  firstName: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  lastName: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  isActive: boolean;
  
}

/*@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}*/


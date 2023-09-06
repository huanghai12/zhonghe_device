import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dev_lists')
export class Dev_list {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  addr: string;

  @Column()
  rrt: string;

  @Column()
  uid: string;
}

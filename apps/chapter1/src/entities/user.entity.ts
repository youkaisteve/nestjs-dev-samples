import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'tb_user',
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  loginName: string;

  @Column()
  userName: string;

  @Column()
  password: string;
}

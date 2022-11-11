import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'apartments', createdAt: false, updatedAt: false })
export class Apartment extends Model<Apartment> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  floor: number;

  @Column({ type: DataType.INTEGER })
  pos_on_floor: number;

  @Column({ type: DataType.BIGINT })
  price: number;

  @Column({ type: DataType.INTEGER })
  rooms: number;

  @Column({ type: DataType.FLOAT })
  area_total: number;

  @Column({ type: DataType.FLOAT })
  area_kitchen: number;

  @Column({ type: DataType.FLOAT })
  area_live: number;

  @Column({ type: DataType.STRING(256) })
  layout_image: string;
}

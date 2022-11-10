import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Apartment } from './apartments.model';

@Injectable()
export class ApartmentsService {
  constructor(@InjectModel(Apartment) private repository: typeof Apartment) {}

  public async findAll(offset: number) {
    return await this.repository.findAll({
      limit: 6,
      offset: offset,
      order: ['id'],
    });
  }

  public async getById(id: number) {
    return await this.repository.findOne({
      where: {
        id: id,
      },
    });
  }
}

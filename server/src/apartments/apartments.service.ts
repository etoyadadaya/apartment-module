import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Apartment } from './apartments.model';

@Injectable()
export class ApartmentsService {
  constructor(@InjectModel(Apartment) private repository: typeof Apartment) {}

  public async getById(id: number) {
    return await this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  public async count() {
    return await this.repository.count();
  }

  public async list(offset: number, sort: string) {
    return await this.repository.findAll({
      limit: 6,
      offset: offset,
      order: [sort],
    });
  }
}

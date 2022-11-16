import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Apartment} from './apartments.model';
import {Filter} from '../types/filter';
import {Op} from "sequelize";

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

  public async count(filter: Filter) {
    return await this.repository.count({
      where: {
        rooms: filter.rooms,
        area_total: {
          [Op.gt]: filter.area.from,
          [Op.lt]: filter.area.to
        },
        area_kitchen: {
          [Op.gt]: filter.kitchen_area.from,
          [Op.lt]: filter.kitchen_area.to
        },
        area_live: {
          [Op.gt]: filter.live_area.from,
          [Op.lt]: filter.live_area.to
        },
        price: {
          [Op.gt]: filter.price.from,
          [Op.lt]: filter.price.to
        },
      },
    });
  }

  public async list(offset: number, sort: string, filter: Filter) {
    return await this.repository.findAll({
      limit: 6,
      offset: offset,
      order: [sort],
      where: {
        rooms: filter.rooms,
        area_total: {
          [Op.gt]: filter.area.from,
          [Op.lt]: filter.area.to
        },
        area_kitchen: {
          [Op.gt]: filter.kitchen_area.from,
          [Op.lt]: filter.kitchen_area.to
        },
        area_live: {
          [Op.gt]: filter.live_area.from,
          [Op.lt]: filter.live_area.to
        },
        price: {
          [Op.gt]: filter.price.from,
          [Op.lt]: filter.price.to
        },
      },
    });
  }
}

import {Controller, Get, HttpStatus, Param, Query, Res} from "@nestjs/common";
import { ApartmentsService } from './apartments.service';
import {SortPipe} from "../pipes/sort.pipe";
import {OffsetPipe} from "../pipes/offset.pipe";
import {FilterBuilder} from "../helpers/filterBuilder";

@Controller('apartments')
export class ApartmentsController {
  constructor(private service: ApartmentsService) {}

  @Get()
  public async index(
      @Query('offset', OffsetPipe) offset = 0,
      @Query('rooms', OffsetPipe) rooms = 0,
      @Query('area_from', OffsetPipe) area_from = 0,
      @Query('area_to', OffsetPipe) area_to = 0,
      @Query('kitchen_from', OffsetPipe) kitchen_from = 0,
      @Query('kitchen_to', OffsetPipe) kitchen_to = 0,
      @Query('live_from', OffsetPipe) live_from = 0,
      @Query('live_to', OffsetPipe) live_to = 0,
      @Query('price_from', OffsetPipe) price_from = 0,
      @Query('price_to', OffsetPipe) price_to = 0,
      @Query('sort', SortPipe) sort: string = "id",
      @Res() res,
  ) {
    const apartments = await this.service.list(offset, sort, FilterBuilder(
        rooms,
        area_from,
        area_to,
        kitchen_from,
        kitchen_to,
        live_from,
        live_to,
        price_from,
        price_to
    ));
    if (apartments.length === 0) {
      return res.status(HttpStatus.NOT_FOUND).json({
        errors: "Not Found",
        code: "404: Not Found",
      });
    }
    return res.status(HttpStatus.OK).json(apartments);
  }

  @Get('count')
  public async count(
      @Query('rooms', OffsetPipe) rooms = undefined,
      @Query('area_from', OffsetPipe) area_from = undefined,
      @Query('area_to', OffsetPipe) area_to = undefined,
      @Query('kitchen_from', OffsetPipe) kitchen_from = undefined,
      @Query('kitchen_to', OffsetPipe) kitchen_to = undefined,
      @Query('live_from', OffsetPipe) live_from = undefined,
      @Query('live_to', OffsetPipe) live_to = undefined,
      @Query('price_from', OffsetPipe) price_from = undefined,
      @Query('price_to', OffsetPipe) price_to = undefined,
  ) {
    return this.service.count(FilterBuilder(
        rooms,
        area_from,
        area_to,
        kitchen_from,
        kitchen_to,
        live_from,
        live_to,
        price_from,
        price_to
    ));
  }

  @Get(':id')
  public async get(@Param('id', OffsetPipe) id: number) {
    return this.service.getById(id);
  }
}

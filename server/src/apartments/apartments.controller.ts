import {Controller, Get, HttpStatus, Param, Query, Res} from "@nestjs/common";
import { ApartmentsService } from './apartments.service';
import {SortPipe} from "../pipes/sort.pipe";
import {OffsetPipe} from "../pipes/offset.pipe";

@Controller('apartments')
export class ApartmentsController {
  constructor(private service: ApartmentsService) {}

  @Get()
  public async index(@Query('offset', OffsetPipe) offset = 0, @Query('sort', SortPipe) sort: string = "id", @Res() res) {
    const apartments = await this.service.list(offset, sort);
    if (apartments.length === 0) {
      return res.status(HttpStatus.NOT_FOUND).json({
        errors: "Not Found",
        code: "404: Not Found",
      });
    }
    return res.status(HttpStatus.OK).json(apartments);
  }

  @Get(':id')
  public async get(@Param('id', OffsetPipe) id: number) {
    return this.service.getById(id);
  }
}

import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';

@Controller('apartments')
export class ApartmentsController {
  constructor(private service: ApartmentsService) {}

  @Get()
  public async index(@Query('offset') offset = 0) {
    return this.service.findAll(offset);
  }

  @Get(':id')
  public async get(@Param('id') id: number) {
    return this.service.getById(id);
  }
}

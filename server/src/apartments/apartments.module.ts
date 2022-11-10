import { Module } from '@nestjs/common';
import { ApartmentsController } from './apartments.controller';
import { ApartmentsService } from './apartments.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Apartment } from './apartments.model';

@Module({
  imports: [SequelizeModule.forFeature([Apartment])],
  controllers: [ApartmentsController],
  providers: [ApartmentsService],
  exports: [],
})
export class ApartmentsModule {}

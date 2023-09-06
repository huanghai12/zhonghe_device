import { Module } from '@nestjs/common';
import { Dev_list } from './entity/status';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dev_list])],
  providers: [StatusService],
  controllers: [StatusController],
})
export class StatusModule {}

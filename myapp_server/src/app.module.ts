import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import database from '../resources/etc/dev';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusController } from './status/status.controller';
import { StatusService } from './status/status.service';
import { StatusModule } from './status/status.module';
import { Dev_list } from './status/entity/status';

@Module({
  imports: [
    TypeOrmModule.forRoot(JSON.parse(database)),
    TypeOrmModule.forFeature([Dev_list]),
    StatusModule,
  ],
  controllers: [AppController, StatusController],
  providers: [AppService, StatusService],
})
export class AppModule {}

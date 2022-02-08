import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './module/todo/todo.module';
import { createMongooseOptions } from './database'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => createMongooseOptions('mongodb://localhost:27017/todo'),
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

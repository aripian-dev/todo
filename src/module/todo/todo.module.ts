import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { taskSchema } from './todo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'task', schema: taskSchema},
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}

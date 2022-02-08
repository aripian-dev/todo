import { Injectable } from '@nestjs/common';
import { CreateTodoDto, ResponseTodoDto, FullResponseDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ITaskDocument } from './todo.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('task') private readonly taskModel: Model<ITaskDocument>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<ResponseTodoDto> {

    const taskDoc = await this.taskModel.create(createTodoDto);

    return {
      title: taskDoc.title,
      status: taskDoc.status,
    };
  }

  async findAll():Promise<FullResponseDto[]>  {
    return await this.taskModel.find();
  }

  async findOne(id: number):Promise<FullResponseDto> {
    return await this.taskModel.findOne({id});
  }

  async update(id: number, updateTodoDto: UpdateTodoDto):Promise<FullResponseDto> {
    return await this.taskModel.findOneAndUpdate({id}, updateTodoDto);
  }

  async updateStatus(id: number, status: string):Promise<FullResponseDto> {
    return await this.taskModel.findOneAndUpdate({id}, {status});
  }

  async remove(id: number):Promise<null> {
    return await this.taskModel.findOneAndDelete({id});
  }
}

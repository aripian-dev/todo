import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus, Query, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiQuery} from '@nestjs/swagger';
import { TodoService } from './todo.service';
import { CreateTodoDto, ResponseTodoDto, FullResponseDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@ApiTags('task')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: ResponseTodoDto,
    description: 'Task created successfully',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error'
  })
  @ApiBody({
    type: CreateTodoDto,
    required: true,
  })
  async create(@Body() createTodoDto: CreateTodoDto): Promise<ResponseTodoDto> {
    return await this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: FullResponseDto,
    description: 'Task found successfully',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error'
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Task not found',
  })
  async findAll(): Promise<FullResponseDto[]> {
    return await this.todoService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: FullResponseDto,
    description: 'Task found successfully',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error'
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Task not found',
  })
  async findOne(@Param('id') id: string): Promise<FullResponseDto> {
    return await this.todoService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: FullResponseDto,
    description: 'Task updated successfully',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error'
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Task not found',
  })
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<FullResponseDto> {
    return await this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}

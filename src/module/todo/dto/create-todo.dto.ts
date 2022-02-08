import {
  IsBoolean,
  IsString,
  IsEnum,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import {ApiProperty, ApiPropertyOptional, ApiResponseProperty} from '@nestjs/swagger';
import { taskStatusEnum } from '../todo.enum';

export class CreateTodoDto {
	@IsNotEmpty()
	@IsString()
	@ApiProperty({
		required: true,
		type: 'string',
		description: 'task title',
	})
	title: string;

	@IsNotEmpty()
	@IsEnum(taskStatusEnum)
	@ApiProperty({
		required: true,
		type: 'enum',
		enum: taskStatusEnum,
		description: 'task status',
	})
	status: taskStatusEnum;

	@IsString()
	@ApiPropertyOptional({
		required: false,
		type: 'string',
		description: 'task description',
	})
	desc: string;

	@IsBoolean()
	@ApiPropertyOptional({
		required: false,
		type: 'boolean',
		description: 'task enabled status',
	})
	enable: boolean;
}

export class ResponseTodoDto {
	@ApiProperty({
		type: 'string',
		description: 'task title',
	})
	title: string;

	@ApiProperty({
		type: 'string',
		description: 'task status',
	})
	status: string;
}

export class FullResponseDto extends CreateTodoDto {}

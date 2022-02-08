import { Document } from 'mongoose'; 
import { taskStatusEnum } from './todo.enum';

export interface ITask {
	title: string,
	status: taskStatusEnum,
	desc: string,
	enable: Boolean,
}

export interface ITaskDocument extends ITask, Document {}
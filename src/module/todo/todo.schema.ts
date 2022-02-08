import * as mongoose from 'mongoose';
import {taskStatusEnum} from './todo.enum';

function getStringEnumValue<E extends Record<keyof E, string>>(e: E): E[keyof E][] {
	return (Object.keys(e) as (keyof E)[]).map((k) => e[k]);
}

export const taskSchema = new mongoose.Schema({
  title: {
  	type: String,
  	required: true,
  },
  status: {
  	type: String,
  	required: true,
  	enum: getStringEnumValue(taskStatusEnum),
  },
  desc: String,
  enable: {
  	type: Boolean,
  	default: true,
  	required: true,
  },
});
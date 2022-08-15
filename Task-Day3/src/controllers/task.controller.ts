import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entities/task.entity';
import { Repository } from 'typeorm';

@ApiTags("tasks")
@Controller('tasks')
export class TaskController{
    constructor(private readonly taskService:TaskService){}
    @Get()
    async findAll(){
        return await this.taskService.findAll()
    }
    
    @Get(":taskId")
    async findOne(
        @Param("taskId", ParseIntPipe) taskId:number
    ){
        return await this.taskService.findOne(taskId)
    }

    @Post()
    async addOne(
        @Body() task:{ title: string; userId: number }
    ){
        return await this.taskService.addOne(task)
    }

    @Put(":taskId")
    async updateOne(
        @Param("taskId", ParseIntPipe) taskId:number,
        @Body() taskDto:string
    ){
        return await this.taskService.updateOne(taskId, taskDto)
    }

    @Delete(":taskId")
    async deleteOne(
        @Param("taskId", ParseIntPipe) taskId:number
    ){
        return await this.taskService.deleteOne(taskId)
    }
}
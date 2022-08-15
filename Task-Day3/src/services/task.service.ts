import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { StatusEntity } from 'src/entities/status.entity';
import { TaskEntity } from 'src/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService{
    constructor(
        @InjectRepository(TaskEntity)
        private taskRepository: Repository<TaskEntity>,
        @InjectRepository(StatusEntity)
        private stateRepository: Repository<StatusEntity>,
    ){}
    async findAll(){
        return await this.taskRepository.find({ relations: { status: true } });
    }
    async findOne(id:number){
        return await this.taskRepository.find({
            where: { id },
            relations: { status: true },
            });
		}
    
    async addOne(taskDetails: {
        title: string;
        userId: number;
        }) {
        const newState = this.stateRepository.create();
        await this.stateRepository.save(newState)
        const newTask = this.taskRepository.create({
            title: taskDetails.title,
            user: taskDetails.userId,
            status: newState.id,
        });
        await this.taskRepository.save(newTask)
    
        return newTask
        }
    async updateOne(taskId:number, taskDto:string){
        return await this.taskRepository.update(taskId, { title: taskDto });
    }
    async deleteOne(taskId:number){
        return await this.taskRepository.delete(taskId);
    }
}
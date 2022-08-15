import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { StatusEntity } from 'src/entities/status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService{
    constructor(
        @InjectRepository(StatusEntity)
        private stateRepository: Repository<StatusEntity>,
    ) {}
    async findAll(){
        return await this.stateRepository.find();
    }
    async findOne(statusId:number){
        return await this.stateRepository.find({where:{id:statusId}})
    }
}
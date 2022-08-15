import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StatusService } from '../services/status.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("status")
@Controller('status')
export class StatusController{
    constructor(private readonly statusService:StatusService){}
    @Get()
    async findAll(){
        return await this.statusService.findAll()
    }
    
    @Get(":statusId")
    async findOne(
        @Param("statusId", ParseIntPipe) statusId:number
    ){
        return await this.statusService.findOne(statusId)
    }
}
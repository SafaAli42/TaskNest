import { Module } from "@nestjs/common";
import { StatusModule } from "./status.module";
import { TaskController } from "../controllers/task.controller";
import { TaskService } from "../services/task.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusEntity } from 'src/entities/status.entity';
import { TaskEntity } from 'src/entities/task.entity';
import { StatusService } from "src/services/status.service";

@Module({
    imports:[StatusModule,TypeOrmModule.forFeature([TaskEntity,StatusEntity])],
    controllers:[TaskController],
    providers:[TaskService,StatusService],
    exports:[TaskService]
})

export class TaskModule{

}
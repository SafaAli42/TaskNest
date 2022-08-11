import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskServieces } from "./task.service";

@Module({
    imports:[],
    controllers:[TaskController],
    providers:[TaskServieces],
    exports:[TaskServieces],
})
export class TaskModule{}
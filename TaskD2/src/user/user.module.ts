import { Module } from "@nestjs/common";
import { TaskModule } from "src/task/task.module";
import { UsersControllers } from "./user.controller";
import { UserServieces } from "./user.service";

@Module({
    imports:[TaskModule],
    controllers:[UsersControllers],
    providers:[UserServieces],
})

export class UserModule{}
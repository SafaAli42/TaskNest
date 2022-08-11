import { Module } from "@nestjs/common";
import { StatusController } from "./status.controller";
import { StatusServieces } from "./status.service";

@Module({
    imports:[],
    controllers:[StatusController],
    providers:[StatusServieces],
})
export class StatusModule {}
import { Module } from "@nestjs/common";
import { StatusController } from "../controllers/status.controller";
import { StatusService } from "../services/status.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StatusEntity } from "src/entities/status.entity";

@Module({
    imports:[TypeOrmModule.forFeature([StatusEntity])],
    controllers:[StatusController],
    providers:[StatusService],
    exports:[StatusService]
})

export class StatusModule{

}
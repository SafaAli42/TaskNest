import { Controller, Get } from "@nestjs/common";
import { StatusServieces } from "./status.service";

@Controller("status")
export class StatusController{

    constructor(private readonly statusServieces:StatusServieces) {}
@Get()
findStatus(){
return this.statusServieces.findStatus()}
}
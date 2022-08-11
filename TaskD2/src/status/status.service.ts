import { Injectable } from "@nestjs/common";
import * as info from '../../data/data.json'
@Injectable()
export class StatusServieces{
    findStatus(){
 return info.status
    }
}
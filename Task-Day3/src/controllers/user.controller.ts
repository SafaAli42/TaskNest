import { UserService } from '../services/user.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("users")
@Controller('users')
export class UserController{
    constructor(private readonly userService:UserService){}
    @Get()
    async findAll(){
        return await this.userService.findAll()
    }
    
    @Get(":userId")
    async findOne(
        @Param("userId", ParseIntPipe) userId:number
    ){
        return await this.userService.findOne(userId)
    }

    @Post()
    async addOne(
        @Body() user:{ username: string; password: string }
    ){
        return await this.userService.addOne(user.username, user.password)
    }

    @Put(":userId")
    async updateOne(
        @Param("userId", ParseIntPipe) userId:number,
        @Body() userDto:{ username: string; password: string }
    ){
        return await this.userService.updateOne(userId, userDto)
    }

    @Delete(":userId")
    async deleteOne(
        @Param("userId", ParseIntPipe) userId:number
    ){
        return await this.userService.deleteOne(userId)
    }
}
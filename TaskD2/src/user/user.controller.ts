import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UserServieces } from "./user.service";

@Controller('users')
export class UsersControllers {

    constructor(private readonly userServieces:UserServieces){}

    @Get()
        findAllUsers (){
            return this.userServieces.findAllUsers()
        }
    @Get(":id")
    findOneUser (@Param('id',ParseIntPipe) userId:Number){
        return this.userServieces.findOneUser(userId)
    }

    @Get(":id/tasks")
    findUserTasks(@Param("id") userID:any){
        return this.userServieces.findUserTasks(userID)
    }

    @Post()
    addUser(@Body() user:any){
        return this.userServieces.addUser(user)
    }

    @Put(":id")
    modifyUser( 
    @Param("id") userID:any
    ,@Body() user:any  
    ){
        return this.userServieces.modifyUser(userID,user)
    }

    @Delete(":id")
    deleteUser(@Param ("id") userID:any){
        return this.userServieces.deleteUser(userID)
    }
    
}
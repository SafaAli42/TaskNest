import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { TaskServieces } from "src/task/task.service";
import * as info from '../../data/data.json'

@Injectable()
export class UserServieces {

      constructor (private readonly taskServieces:TaskServieces) {}

    findAllUsers() {
        return info.users;
    }
    findOneUser(userId: Number) {
        let user = info.users.find(user => user.id === userId)
        let task = this.taskServieces.findOneTask(user.id)
        return {user,
            task
        }
    }
    findUserTasks(userID:any){
        return info.tasks.find(task=>task.userId == userID)
    }

    addUser(user: any) {
        info.users.find(usr => {
            if (user.id == usr.id) {
                throw new NotFoundException("the user is already declared")
            }
        });
        info.users.push(user)
        return info.users
    }
    modifyUser(userID: any, user: any) {
        console.log(userID,user,typeof userID);
    
        const dbUser = info.users.find(usr => usr.id == userID)
        if (!dbUser) {
            throw new NotFoundException()
        }
        dbUser.username = user.username
        return dbUser
    }
    deleteUser(userID:any){
        let users = info.users.filter(usr=>usr.id != userID)
        let tasks = this.taskServieces.deleteTasks(userID)
        return {users, tasks}
    }
}

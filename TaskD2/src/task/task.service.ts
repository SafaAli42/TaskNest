import { Get, Injectable } from "@nestjs/common";
import * as info from '../../data/data.json'
@Injectable()
export class TaskServieces{
findAllTasks(){
return info.tasks
}

findOneTask(userID:any){
    return info.tasks.find(task=>task.userId == userID)
}

addTask(task){
    info.tasks.push(task)
    return info.tasks
}

modifyTask(taskID,taskTitle){
let modifiedtask = info.tasks.find(task=>task.id==taskID)
modifiedtask.title = taskTitle.title
return  modifiedtask
}

deleteTask(taskID){
    return info.tasks.filter(task=>{return task.id != taskID})
}
deleteTasks(userID){
    return info.tasks.filter(tsk=>tsk.userId !=userID )
}
}
import { Module } from '@nestjs/common';
import { StatusModule } from './status/status.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [UserModule,TaskModule,StatusModule]
})
export class AppModule {}

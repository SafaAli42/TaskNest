import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusEntity } from './entities/status.entity';
import { TaskEntity } from './entities/task.entity';
import { UserEntity } from './entities/user.entity';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from './modules/status.module';
import { TaskModule } from './modules/task.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [UserModule, TaskModule, StatusModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Mongokiki',
      database: 'iti',
      synchronize: true,
      entities: [UserEntity, TaskEntity, StatusEntity],
    }),
    ConfigModule.forRoot({
      envFilePath:".env"
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

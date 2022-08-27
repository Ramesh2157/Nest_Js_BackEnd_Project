import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
@Module({
  imports: [AuthModule, UsersModule, MoviesModule],
  controllers: [AppController],
  // eslint-disable-next-line prettier/prettier
  providers: [AppService,PrismaService, ],
})
export class AppModule {}

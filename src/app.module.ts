import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
//import { GraphQLPlaygroundModule } from 'graphql-playground-html'; 
@Module({
 imports: [
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), '/schema.gql'),
    sortSchema: true,
    playground: false,
    //plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'task2',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true,
      }),  
 AuthorsModule, PostsModule,
 ],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule {}
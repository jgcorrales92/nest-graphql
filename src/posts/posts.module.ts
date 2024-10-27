import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

@Module({
 imports: [TypeOrmModule.forFeature([Post])], // Importa Author para TypeORM
 providers: [PostsService, PostsResolver],
 exports: [PostsService], // Exporta AuthorsService para que otros módulos lo puedan usar
})
export class PostsModule {}
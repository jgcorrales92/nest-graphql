import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';

@Module({
 imports: [TypeOrmModule.forFeature([Author])], // Importa Author para TypeORM
 providers: [AuthorsService, AuthorsResolver],
 exports: [AuthorsService], // Exporta AuthorsService para que otros módulos lo puedan usar
})
export class AuthorsModule {}
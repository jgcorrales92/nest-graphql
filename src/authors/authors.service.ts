import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}
  async create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const author = this.authorsRepository.create(createAuthorInput);
    return this.authorsRepository.save(author);
  }
  async findAll(): Promise<Author[]> {
    return this.authorsRepository.find();
  }

  async findOne(id: number): Promise<Author> {
    return this.authorsRepository.findOneBy({ id });
  }

  async update(id: number, updateAuthorInput: UpdateAuthorInput): Promise<Author> {
    const author = await this.authorsRepository.findOneBy({ id });
    if (author) {
      Object.assign(author, updateAuthorInput);
      return this.authorsRepository.save(author);
    }
    return null; 
  }

  async remove(id: number): Promise<Author> {
    const author = await this.authorsRepository.findOneBy({ id });
    if (author) {
      return this.authorsRepository.remove(author);
    }
    return null; // O puedes lanzar un error si el autor no existe
  }
}

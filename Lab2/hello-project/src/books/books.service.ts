import BookEntity from '../db/last/book.entity';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';
import UserEntity from '../db/last/user.entity';
import { Injectable } from '@nestjs/common';
import GenreEntity from '../db/last/genre.entity';

@Injectable()
export default class BooksService {

  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name , userID , genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }

  async update(bookDetails: UpdateBookDto): Promise<BookEntity> {
    const { bookId, name , userID , genreIDs } = bookDetails;
    const book = await BookEntity.findOne(bookId);
    book.name = name;
    book.user = await UserEntity.findOne(userID);
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }

  async delete(bookId: number): Promise<BookEntity> {
    const book = await BookEntity.findOne(bookId);
    await book.remove();
    return book;
  }

  async getAllBooks(): Promise<BookEntity[] > {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }
}
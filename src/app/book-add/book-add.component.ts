  import { Component, EventEmitter, Input, Output } from '@angular/core';
  import { Book } from "../model/book";
import { last } from 'rxjs';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  @Input() lastId?:number;
  @Output() bookCreated=new EventEmitter<Book>();
  
  
  addBook(title : string, author : string, price : number){
    const newBook = new Book(
      //id : Math.ceil(Math.random() * 1000),
      this.lastId! + 1,
      title,
      author ,
      price
     );
     this.bookCreated.emit(newBook);

    console.log(newBook);
  }
  @Input() selectedBook?: Book;

addOrUpdateBook(title: string, author: string, price: number) {
  const book = new Book(
    this.selectedBook ? this.selectedBook.id : this.lastId! + 1,
    title,
    author,
    price
  );
  this.bookCreated.emit(book);
}


}

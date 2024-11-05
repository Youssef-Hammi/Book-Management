import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from "../model/book";


@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})

export class BooksListComponent {
  title = "Liste des nouveaux livres :";
  books = [
    new Book(1,"Atomic Habits","ames Clear",35),
    new Book(2,"Book 2","Author 2",356),
    new Book(3,"Book 3","Author 3",385),
    new Book(4,"Book 4","Author 4",350)
  ];
  action = "";

  changeAction(action : string){
    this.action = action;
  }
  addBook(book:Book){
    this.books=[...this.books, book];
    this.changeAction("");
  }
  deleteBook(bookId: number) {
    this.books = this.books.filter(book => book.id !== bookId);
  }
  selectedBook?: Book;

  editBook(book: Book) {
    this.selectedBook = book;
    this.changeAction('edit');
  }
  
  updateBook(updatedBook: Book) {
    const index = this.books.findIndex(b => b.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
    this.selectedBook = undefined;
    this.changeAction('');
    
  }
  

}

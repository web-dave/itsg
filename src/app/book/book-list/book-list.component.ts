import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BooksState, booksStoreName } from '../store/books.reducer';
import { getBooks } from '../store/books.selectors';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<BooksState>) {}

  ngOnInit() {
    this.books$ = this.store.select(getBooks);
  }
}

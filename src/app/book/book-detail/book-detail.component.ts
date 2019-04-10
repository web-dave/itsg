import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BooksState } from '../store/books.reducer';
import { getSelectedBook } from '../store/books.selectors';
// import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public book: Book;
  book$: Observable<Book>;

  constructor(private store: Store<BooksState>) {}

  ngOnInit() {
    this.book$ = this.store.select(getSelectedBook);
  }
}

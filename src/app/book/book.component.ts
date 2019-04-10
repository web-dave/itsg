import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksState } from './store/books.reducer';
import { WaitForBooks } from './store/books.actions';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor(private store: Store<BooksState>) {}

  ngOnInit() {
    this.store.dispatch(new WaitForBooks());
  }
}

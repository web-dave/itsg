// tslint:disable:max-line-length
import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../shared/book';
import {
  LOAD_BOOKS,
  LoadBooks,
  BookActions,
  WAIT_FOR_BOOKS,
  SELECT_BOOK
} from './books.actions';

export const booksStoreName = 'books';

export interface BooksState {
  books: Book[];
  selected: Book;
}

export const initialState: BooksState = {
  books: [],
  selected: null
};

export function booksReducer(
  state = initialState,
  action: BookActions
): BooksState {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        books: action.books
      };
    case SELECT_BOOK:
      return {
        ...state,
        selected: state.books.filter(b => b.isbn === action.isbn)[0]
      };
    default: {
      return state;
    }
  }
}

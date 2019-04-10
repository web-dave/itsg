// tslint:disable:max-line-length
import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../shared/book';
import {
  LOAD_BOOKS,
  LoadBooks,
  BookActions,
  WAIT_FOR_BOOKS
} from './books.actions';

export const booksStoreName = 'books';

export interface BooksState {
  books: Book[];
}

export const initialState: BooksState = {
  books: []
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
    default: {
      return state;
    }
  }
}

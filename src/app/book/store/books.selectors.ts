import { createSelector, createFeatureSelector } from '@ngrx/store';

import { booksStoreName, BooksState } from './books.reducer';

export const getBooks = createSelector(
  createFeatureSelector(booksStoreName),
  (state: BooksState) => state.books
);

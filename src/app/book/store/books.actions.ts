import { Action } from '@ngrx/store';
import { Book } from '../shared/book';

export const LOAD_BOOKS = '[books] load books';
export const WAIT_FOR_BOOKS = '[books] wait for books';
export const SELECT_BOOK = '[books] select book';

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;
  constructor(public books: Book[]) {}
}
export class WaitForBooks implements Action {
  readonly type = WAIT_FOR_BOOKS;
}
export class SelectBook implements Action {
  readonly type = SELECT_BOOK;
  constructor(public isbn: string) {}
}

export type BookActions = LoadBooks | WaitForBooks | SelectBook;

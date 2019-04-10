import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { WAIT_FOR_BOOKS } from './books.actions';
import { BookDataService } from '../shared/book-data.service';

@Injectable()
export class BookEffects {
  constructor(private actions: Actions, private service: BookDataService) {}
  @Effect({ dispatch: false })
  loadBooks = this.actions.pipe(
    ofType(WAIT_FOR_BOOKS),
    tap(() => this.service.loadBooks())
  );
}

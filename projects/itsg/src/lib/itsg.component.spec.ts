import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsgComponent } from './itsg.component';

describe('ItsgComponent', () => {
  let component: ItsgComponent;
  let fixture: ComponentFixture<ItsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

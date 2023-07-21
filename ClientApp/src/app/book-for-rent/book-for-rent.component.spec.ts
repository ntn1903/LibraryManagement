import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookForRentComponent } from './book-for-rent.component';

describe('BookForRentComponent', () => {
  let component: BookForRentComponent;
  let fixture: ComponentFixture<BookForRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookForRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

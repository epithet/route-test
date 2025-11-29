import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat2 } from './cat2';

describe('Cat2', () => {
  let component: Cat2;
  let fixture: ComponentFixture<Cat2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cat2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cat2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

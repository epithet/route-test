import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat1 } from './cat1';

describe('Cat1', () => {
  let component: Cat1;
  let fixture: ComponentFixture<Cat1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cat1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cat1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

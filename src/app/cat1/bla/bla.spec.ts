import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bla } from './bla';

describe('Bla', () => {
  let component: Bla;
  let fixture: ComponentFixture<Bla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

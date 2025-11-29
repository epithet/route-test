import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blu } from './blu';

describe('Blu', () => {
  let component: Blu;
  let fixture: ComponentFixture<Blu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

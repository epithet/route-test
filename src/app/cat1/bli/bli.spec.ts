import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bli } from './bli';

describe('Bli', () => {
  let component: Bli;
  let fixture: ComponentFixture<Bli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bli]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bli);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

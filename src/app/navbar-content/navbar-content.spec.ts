import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarContent } from './navbar-content';

describe('NavbarContent', () => {
  let component: NavbarContent;
  let fixture: ComponentFixture<NavbarContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

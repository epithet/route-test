import { Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navbar',
  imports: [NgTemplateOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  navbarService = inject(NavbarService);
}

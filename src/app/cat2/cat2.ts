import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarContent } from '../navbar-content/navbar-content';

@Component({
  selector: 'app-cat2',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NavbarContent],
  templateUrl: './cat2.html',
  styleUrl: './cat2.scss',
})
export class Cat2 {

}

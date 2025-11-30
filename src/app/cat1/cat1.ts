import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarContent } from '../navbar-content/navbar-content';

@Component({
  selector: 'app-cat1',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NavbarContent],
  templateUrl: './cat1.html',
  styleUrl: './cat1.scss',
})
export class Cat1 {

}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { initRouting } from './app.routes';
import { Navbar } from './navbar/navbar'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    initRouting();
  }
}

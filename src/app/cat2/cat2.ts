import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarContent } from '../navbar-content/navbar-content';

const LAST_ROUTE_ID = 'cat2_page';

@Component({
  selector: 'app-cat2',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NavbarContent],
  templateUrl: './cat2.html',
  styleUrl: './cat2.scss',
})
export class Cat2 {
  router = inject(Router);
  route = inject(ActivatedRoute);
  constructor() {
    this.route.url.subscribe(() => {
      this.lastRoute();
    });
  }

  lastRoute() {
    const lastRoute = localStorage.getItem(LAST_ROUTE_ID) || 'foo';
    setTimeout(async () => {
      this.navigateTo(lastRoute);
    });
  }

  navigateTo(fragment: string) {
    localStorage.setItem(LAST_ROUTE_ID, fragment);
    this.router.navigate([fragment], { relativeTo: this.route });
  }
}

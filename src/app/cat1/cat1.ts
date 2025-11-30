import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarContent } from '../navbar-content/navbar-content';

const LAST_ROUTE_ID = 'cat1_page';

@Component({
  selector: 'app-cat1',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NavbarContent],
  templateUrl: './cat1.html',
  styleUrl: './cat1.scss',
})
export class Cat1 {
  router = inject(Router);
  route = inject(ActivatedRoute);
  constructor() {
    this.route.url.subscribe(() => {
      this.lastRoute();
    });
  }

  lastRoute() {
    const lastRoute = localStorage.getItem(LAST_ROUTE_ID) || 'bla';
    setTimeout(async () => {
      this.navigateTo(lastRoute);
    });
  }

  navigateTo(fragment: string) {
    localStorage.setItem(LAST_ROUTE_ID, fragment);
    this.router.navigate([fragment], { relativeTo: this.route });
  }
}

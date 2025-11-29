import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category {
  readonly pages: string[];
  constructor(activatedRoute: ActivatedRoute) {
    this.pages = activatedRoute.snapshot.routeConfig?.children
      ?.filter(c => c.path !== '').map(c => c.path!) ?? [];
  }
}

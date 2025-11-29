import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category {
  readonly pages = input<string[]>();
}

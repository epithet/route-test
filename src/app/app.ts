import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivationEnd, Event, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ROUTE_SAVE_KEY } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
      if (event instanceof ActivationEnd) {
        const routeConfig = event.snapshot.routeConfig;
        const saveKey = routeConfig?.data?.[ROUTE_SAVE_KEY];
        const page = routeConfig?.path;
        if (saveKey !== undefined && page !== undefined) {
          localStorage.setItem(saveKey, page);
        }
      }
    });
  }
}

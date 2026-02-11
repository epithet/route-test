import { Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, ActivationEnd, Event, RedirectFunction, ResolveFn, Router, Routes } from '@angular/router';
import { Category } from './category/category';
import { Bla } from './cat1/bla/bla';
import { Bli } from './cat1/bli/bli';
import { Blu } from './cat1/blu/blu';
import { Foo } from './cat2/foo/foo';
import { Bar } from './cat2/bar/bar';

const ROUTE_SAVE_KEY = 'SaveRoute';

export function initRouting() {
  inject(Router).events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
    if (event instanceof ActivationEnd) {
      const saveKey = event.snapshot.pathFromRoot.at(-2)?.routeConfig?.data?.[ROUTE_SAVE_KEY];
      const page = event.snapshot.routeConfig?.path;
      if (saveKey !== undefined && page !== undefined) {
        localStorage.setItem(saveKey, page);
      }
    }
  });
}

function createRedirectFunction(defaultRedirect: string): RedirectFunction {
  return route => localStorage.getItem(route.data[ROUTE_SAVE_KEY]) ?? defaultRedirect;
}

const pagesResolver: ResolveFn<string[]> = (route: ActivatedRouteSnapshot) =>
  route.routeConfig?.children?.filter(c => c.path !== '').map(c => c.path!) ?? [];

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cat1' },
  {
    path: 'cat1',
    component: Category,
    resolve: { pages: pagesResolver },
    data: { [ROUTE_SAVE_KEY]: 'cat1_page' },
    children: [
      { path: '', pathMatch: 'full', redirectTo: createRedirectFunction('bla') },
      { path: 'bla', component: Bla },
      { path: 'bli', component: Bli },
      { path: 'blu', component: Blu },
    ],
  },
  {
    path: 'cat2',
    component: Category,
    resolve: { pages: pagesResolver },
    data: { [ROUTE_SAVE_KEY]: 'cat2_page' },
    children: [
      { path: '', pathMatch: 'full', redirectTo: createRedirectFunction('foo') },
      { path: 'foo', component: Foo },
      { path: 'bar', component: Bar },
    ],
  },
];

import { Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivationEnd, Event, Router, Routes } from '@angular/router';
import { Category } from './category/category';
import { Bla } from './cat1/bla/bla';
import { Bli } from './cat1/bli/bli';
import { Blu } from './cat1/blu/blu';
import { Foo } from './cat2/foo/foo';
import { Bar } from './cat2/bar/bar';

const ROUTE_SAVE_KEY = 'SaveRoute';
const ID_CAT1_PAGE = 'cat1_page';
const ID_CAT2_PAGE = 'cat2_page';

export function initRouting() {
  inject(Router).events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
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

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cat1' },
  {
    path: 'cat1',
    component: Category,
    children: [
      { path: '', pathMatch: 'full',
        redirectTo: () => localStorage.getItem(ID_CAT1_PAGE) ?? 'bla' },
      { path: 'bla', component: Bla, data: { [ROUTE_SAVE_KEY]: ID_CAT1_PAGE } },
      { path: 'bli', component: Bli, data: { [ROUTE_SAVE_KEY]: ID_CAT1_PAGE } },
      { path: 'blu', component: Blu, data: { [ROUTE_SAVE_KEY]: ID_CAT1_PAGE } },
    ],
  },
  {
    path: 'cat2',
    component: Category,
    children: [
      { path: '', pathMatch: 'full',
        redirectTo: () => localStorage.getItem(ID_CAT2_PAGE) ?? 'foo' },
      { path: 'foo', component: Foo, data: { [ROUTE_SAVE_KEY]: ID_CAT2_PAGE } },
      { path: 'bar', component: Bar, data: { [ROUTE_SAVE_KEY]: ID_CAT2_PAGE } },
    ],
  },
];

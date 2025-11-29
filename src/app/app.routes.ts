import { Routes } from '@angular/router';
import { Cat1 } from './cat1/cat1';
import { Bla } from './cat1/bla/bla';
import { Bli } from './cat1/bli/bli';
import { Blu } from './cat1/blu/blu';
import { Cat2 } from './cat2/cat2';
import { Foo } from './cat2/foo/foo';
import { Bar } from './cat2/bar/bar';

export const routes: Routes = [
  {
    path: 'cat1',
    component: Cat1,
    children: [
      { path: 'bla', component: Bla },
      { path: 'bli', component: Bli },
      { path: 'blu', component: Blu },
    ],
  },
  {
    path: 'cat2',
    component: Cat2,
    children: [
      { path: 'foo', component: Foo },
      { path: 'bar', component: Bar },
    ],
  },
];

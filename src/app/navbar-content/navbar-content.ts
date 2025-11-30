import { Component, AfterViewInit, ViewChild, TemplateRef, OnDestroy, inject } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navbar-content',
  imports: [],
  templateUrl: './navbar-content.html',
  styleUrl: './navbar-content.scss',
})
export class NavbarContent {
  navbarService = inject(NavbarService);

  @ViewChild('template')
  template?: TemplateRef<any>;

  ngAfterViewInit() {
    this.navbarService.navbarContent = this.template;
  }

  ngOnDestroy() {
    this.navbarService.navbarContent = undefined;
  }
}

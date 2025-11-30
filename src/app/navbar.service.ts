import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavbarService {
  public navbarContent?: TemplateRef<any> = undefined;
}

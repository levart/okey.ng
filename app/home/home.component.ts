import { Component, Input, ElementRef, HostBinding } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent{ 
   items1: Array<number> = [1, 2, 3, 4, 5];
}

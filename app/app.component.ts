import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'my-app',
  template: `<home></home>`,
})
export class AppComponent  { name = 'Angular'; }

import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  title = 'Layout';
  //this persists so track value here
  isDark = false;

  constructor() { }
}

declare function require(moduleName: string): any;
const { version: appVersion } = require('../../../../package.json');
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  public navbarCollapsed = true;
  constructor() { }
  public currentVersion: string;

  ngOnInit() {
    this.currentVersion = 'v.' + appVersion;
  }
}

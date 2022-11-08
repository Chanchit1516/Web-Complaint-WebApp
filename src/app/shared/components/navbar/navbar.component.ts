import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentPathname: string = '';

  constructor() { }

  ngOnInit(): void {
    let pathname: string = location.pathname.split('/')[1];
    this.currentPathname = pathname;
  }

}

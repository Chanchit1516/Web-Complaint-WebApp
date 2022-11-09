import {
  Component,
  OnInit
} from '@angular/core';
import {
  faUser,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentPathname: string = '';

  //icon
  faUser = faUser;
  faRightFromBracket = faRightFromBracket;

  constructor() {}

  ngOnInit(): void {
    let pathname: string = location.pathname.split('/')[1];
    this.currentPathname = pathname;
  }

}

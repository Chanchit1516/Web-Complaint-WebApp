import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalStorage } from '@core/services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from '@constants/local-storage.constant';
import { USER_AUTH_TYPE } from '@core/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, public localStorage: LocalStorage) {}

  canActivate(): boolean {
    let isAdmin: boolean = this.localStorage.getItem(
      LOCAL_STORAGE_KEYS.USER_INFO
    )?.is_administrator;
    let paths: string[] = location.pathname.split('/');
    let path: string = paths.length > 1 ? paths[1] : '';

    if (!this.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN)) {
      this.router.navigateByUrl('/login');

      return false;
    } else if (!isAdmin && path === 'user-management') {
      this.router.navigateByUrl('/login');
      return false;
    } else if (!isAdmin && path === 'role-management') {
       this.router.navigateByUrl('/login');
       return false;
    }

    return true;
  }

  get isAdmin(): boolean {
    return Boolean(
      this.localStorage.getItem(LOCAL_STORAGE_KEYS.USER_INFO)?.is_administrator
    );
  }

  get userInfo(): USER_AUTH_TYPE {
    return this.localStorage.getItem(
      LOCAL_STORAGE_KEYS.USER_INFO
    ) as USER_AUTH_TYPE;
  }
}

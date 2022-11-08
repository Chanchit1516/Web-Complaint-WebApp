import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@core/services/auth.service';
import { MainLayoutComponent } from '@shared/layout/main-layout/main-layout.component';
import { LoginLayoutComponent } from '@shared/layout/login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () => import('@modules/login/login.module').then(m=>m.LoginModule)
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadChildren: () => import('@modules/home/home.module').then(m=>m.HomeModule)
      },
      {
        path: 'user-management',
        loadChildren: () => import('@modules/user-management/user-management.module').then(m=>m.UserManagementModule)
      },
      {
        path: 'role-management',
        loadChildren: () => import('@modules/role-management/role-management.module').then(m=>m.RoleManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

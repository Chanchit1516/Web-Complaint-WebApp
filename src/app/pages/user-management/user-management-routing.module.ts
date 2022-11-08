import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'create',
    component: FormComponent
  },
  {
    path: 'update/:caseNo',
    component: FormComponent
  },
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'table',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }

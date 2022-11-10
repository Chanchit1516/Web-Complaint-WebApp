import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleManagementRoutingModule } from './role-management-routing.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '@shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoleManagementRoutingModule,
    FontAwesomeModule
  ]
})
export class RoleManagementModule { }

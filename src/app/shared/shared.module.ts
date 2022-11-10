import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUi } from '@core/material-ui/material-ui.module';
import { TableModule } from 'primeng/table';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormInputComponent } from './components/form-input/form-input.component';

@NgModule({
    declarations: [
        NavbarComponent,
        DropdownComponent,
        FormInputComponent,
    ],
    imports: [
        CommonModule, 
        MaterialUi, 
        ReactiveFormsModule,
        TableModule,
        NgSelectModule,
        FormsModule,
        FontAwesomeModule
    ],
    exports: [
        NavbarComponent,
        DropdownComponent,
        FormInputComponent
    ],
})
export class SharedModule { }

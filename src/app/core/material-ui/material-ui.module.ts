import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    declarations: [],
    imports: [],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatMenuModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialUi { }
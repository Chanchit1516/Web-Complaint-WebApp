import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(Table) table!: Table;

  //icon
  faPlus = faPlus;

  constructor() {}

  ngOnInit(): void {}

}

import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { Table } from 'primeng/table';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { DROPDOWN_MENU, DROPDOWN_MENU_SELECTED } from '@models/dropdown.model';
import { SpinnerService } from '@core/services/spinner.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(Table) table!: Table;

  searchForm: FormGroup = new FormGroup({
    buId: new FormControl('' , Validators.required),
    userName: new FormControl('', Validators.required),
    pageSize: new FormControl('10'),
    pageIndex: new FormControl('0'),
  });

  initForm = {
    buId: null,
    userName: null,
    pageSize: '10',
    pageIndex: '0',
  };



  //icon
  faPlus = faPlus;


  items: DROPDOWN_MENU[] = [];
  selected: DROPDOWN_MENU_SELECTED[] = []
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private spinner: SpinnerService
  ) { }

  ngOnInit(): void {
    this.initMaster();
  }

  initMaster() {
    this.items = [
      { value: 1, text: 'Python' },
      { value: 2, text: 'Node Js' },
      { value: 3, text: 'Java' },
      { value: 4, text: 'PHP' },
      { value: 5, text: 'Django' },
      { value: 6, text: 'Angular' },
      { value: 7, text: 'Vue' },
      { value: 8, text: 'ReactJs' },
    ];

    this.selected = [
      { value: 2, text: 'Node Js' },
      { value: 8, text: 'ReactJs' }
    ];
  }

  dropdownChangeValue(event: any) {
  }

  inputChangeValue(event: any) {
  }

  submitForm() {
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 3000);
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.searchForm.reset({
      ...this.searchForm.value,
      ...this.initForm,
    });
  }

  get formControls(): any {
    return this.searchForm.controls;
  }
}

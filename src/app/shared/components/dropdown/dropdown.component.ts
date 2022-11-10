import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { DROPDOWN_MENU, DROPDOWN_MENU_SELECTED } from '@models/dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() formControl: FormControl = new FormControl('');
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() errorText: string = 'required';
  @Input() className: string = '';
  @Input() isSelectAll: boolean = false;
  @Input() isSelect: boolean = false;
  @Input() items: DROPDOWN_MENU[] = [];
  @Input() selected: DROPDOWN_MENU_SELECTED[] = [];
  @Input() isMultiSelect: boolean = true;
  @Input() submitted: boolean = false;
  @Input() readonly: boolean = false;
  @Input() searchable: boolean = true;

  @Output() onDropdownChangeValue: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {
    if (changes.items) {
      this.items = changes.items.currentValue;
    }
  }

  dropdownChangeValue(event?: any): void {
    this.formControl.setValue(event);
    this.onDropdownChangeValue?.emit(event);
  }

  focusOut(): void {
    this.formControl.markAsTouched();
  }

  get required(): boolean {
    return this.formControl.errors?.['required'];
  }

  get isInvalid(): boolean {
    return this.submitted && this.formControl.invalid;
  }

}

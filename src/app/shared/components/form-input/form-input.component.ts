import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() errorText: string = 'required';
  @Input() id: string = '';
  @Input() formControl: FormControl = new FormControl('');
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() submitted: boolean = false;

  @Output() onInputChangeValue: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  inputChangeValue(event?:any){
    let value: string = event.target.value || '';
    event.target.value = value;
    this.formControl.setValue(value);
    this.onInputChangeValue?.emit(event);
  }

  get required(): boolean {
    return this.formControl.errors?.['required'];
  }

  get isInvalid(): boolean {
    return this.submitted && this.formControl.invalid;
  }

}

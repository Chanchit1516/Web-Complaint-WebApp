import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '@core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  spinner$ = this.spinnerService.spinner$;
  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
  }

}

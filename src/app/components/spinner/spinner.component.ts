import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate(50, style({ opacity: 1 }))]),
      transition(':leave', [animate(100, style({ opacity: 0 }))]),
    ]),
  ],
})
export class SpinnerComponent implements OnInit {
  constructor(public spinnerService: SpinnerService) {}

  ngOnInit() {}
}

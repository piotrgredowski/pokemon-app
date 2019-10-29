import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  // If there are few asynchronous to show spinner they will be stored here.
  // Only when this array is empty spinner should be disabled.
  private spinnerBlockers: null[] = [];
  requiredRevocations: number;

  constructor() {}

  enable(requiredRevocations = 1) {
    this.spinnerBlockers = new Array(requiredRevocations).fill(null);
  }

  disable() {
    this.spinnerBlockers.pop();
  }

  forceDisable() {
    this.spinnerBlockers.length = 0;
  }

  isEnabled() {
    return this.spinnerBlockers.length > 0;
  }
}

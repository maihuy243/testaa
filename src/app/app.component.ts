import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Form Validation Tutorial';
  timeStart: Date | null = null;
  timeEnd: Date | null = null;
  maxTimeEnd: Date | null = null;

  keySetting = ['start', 'end', 'start2', 'end2'];
  timeSetting: any = [
    {
      start: null,
      end: null,
      start2: null,
      end2: null,
    },
    {
      start: null,
      end: null,
      start2: null,
      end2: null,
    },
  ];

  setTimeEnd() {
    const date = new Date(this.timeEnd || '');
    if (!(date instanceof Date)) return;
    const hh = date.getHours();

    if (hh >= 0 && hh <= 6) {
      let nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);
      this.maxTimeEnd = nextDate;
      return;
    }
    this.maxTimeEnd = date;
  }

  checkMinMax(key: string, item: any, type: string) {
    switch (type) {
      case 'min':
        switch (key) {
          case 'start':
            return this.timeStart ? this.timeStart : undefined;
          // case 'end':
          //   return item['start'] || this.timeStart;
          case 'start2':
            return item['start'] || this.timeStart;
          case 'end2':
            return item['start'] || this.timeStart;
          default:
            return undefined;
        }
      case 'max':
        switch (key) {
          case 'start':
            return this.maxTimeEnd ? this.maxTimeEnd : undefined;
          // case 'end':
          //   return this.maxTimeEnd ? this.maxTimeEnd : undefined;
          case 'start2':
            return item['end'] || this.maxTimeEnd;
          case 'end2':
            return item['end'] || this.maxTimeEnd;
          default:
            return undefined;
        }
      default:
        return undefined;
    }
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputKanaDirective } from 'src/shared/directive/inputKana.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { RouterModule } from '@angular/router';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [AppComponent, InputKanaDirective],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbTimepicker,
    TimePickerModule,
    RouterModule,
    TimepickerModule.forRoot(),
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

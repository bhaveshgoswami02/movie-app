import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    NumberWithCommasPipe,
    TimePipe
  ],
  exports: [
    NumberWithCommasPipe,
    TimePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }

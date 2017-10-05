import { NgModule } from '@angular/core';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({

  imports: [
    DateInputsModule,
    GridModule,
    ExcelModule,
    DialogModule,
    ButtonsModule
  ],
  exports: [
    DateInputsModule,
    GridModule,
    ExcelModule,
    DialogModule,
    ButtonsModule
  ],
  declarations: []
})
export class KendoAngularModule { }

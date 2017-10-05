import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs';
import { SafePipe } from './safe-pipe.pipe';
import { LocalizationPipe } from './Localization.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    SafePipe,
    LocalizationPipe
  ],
  declarations: [
    SafePipe,
    LocalizationPipe
  ],
})
export class PipeModule {
}

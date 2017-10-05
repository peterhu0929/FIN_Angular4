import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArComponent } from './ar.component';
import { PipeModule } from '../../_pipe/pipe.module';
import { ArRoutingModule } from './ar-routing.module';
import { SharedCommonModule } from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    ArRoutingModule,
    SharedCommonModule
  ],
  declarations: [
    ArComponent
  ]
})
export class ArModule { }

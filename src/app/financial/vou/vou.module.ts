import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VouComponent } from './vou.component';
import { PipeModule } from '../../_pipe/pipe.module';
import { VouRoutingModule } from './vou-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    VouRoutingModule,
    SharedCommonModule
  ],
  declarations: [
    VouComponent
  ]
})
export class VouModule { }

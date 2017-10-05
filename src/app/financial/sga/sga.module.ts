import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SgaComponent } from './sga.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {SgaRoutingModule} from './sga-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    SgaRoutingModule,
    SharedCommonModule
  ],
  declarations: [
    SgaComponent
  ]
})
export class SgaModule { }

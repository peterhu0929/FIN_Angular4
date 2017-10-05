import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlComponent } from './gl.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {GlRoutingModule} from './gl-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    GlRoutingModule,
    SharedCommonModule
  ],
  declarations: [
    GlComponent
  ]
})
export class GlModule { }

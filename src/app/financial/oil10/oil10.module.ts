import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Oil10Component } from './oil10.component';
import { PipeModule} from '../../_pipe/pipe.module';
import { Oil10RoutingModule} from './oil10-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    Oil10RoutingModule,
    SharedCommonModule
  ],
  declarations: [
    Oil10Component
  ]
})
export class Oil10Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Oil20Component } from './oil20.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {Oil20RoutingModule} from './oil20-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    Oil20RoutingModule,
    SharedCommonModule
  ],
  declarations: [
    Oil20Component
  ]
})
export class Oil20Module { }

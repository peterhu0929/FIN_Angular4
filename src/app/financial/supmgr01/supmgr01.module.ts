import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Supmgr01Component } from './supmgr01.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {Supmgr01RoutingModule} from './supmgr01-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    Supmgr01RoutingModule,
    SharedCommonModule
  ],
  declarations: [
    Supmgr01Component
  ]
})
export class Supmgr01Module { }

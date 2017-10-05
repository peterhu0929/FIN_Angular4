import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Supmgr02Component } from './supmgr02.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {Supmgr02RoutingModule} from './supmgr02-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    Supmgr02RoutingModule,
    SharedCommonModule
  ],
  declarations: [
    Supmgr02Component
  ]
})
export class Supmgr02Module { }

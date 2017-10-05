import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Supmgr03Component } from './supmgr03.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {Supmgr03RoutingModule} from './supmgr03-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    Supmgr03RoutingModule,
    SharedCommonModule
  ],
  declarations: [
    Supmgr03Component
]
})
export class Supmgr03Module { }

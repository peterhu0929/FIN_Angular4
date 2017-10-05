import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoComponent } from './invo.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {InvoRoutingModule} from './invo-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';
import {MyIframeComponent} from '../../_shared/my-iframe/my-iframe.component';
@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    InvoRoutingModule,
    SharedCommonModule
  ],
  declarations: [
    InvoComponent
  ]
})
export class InvoModule { }

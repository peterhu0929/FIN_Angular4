import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayComponent } from './pay.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {PayRoutingModule} from './pay-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    PayRoutingModule,
    SharedCommonModule
  ],
  declarations: [
    PayComponent
  ]
})
export class PayModule { }

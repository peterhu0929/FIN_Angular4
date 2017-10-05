import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashComponent } from './cash.component';
import { PipeModule } from '../../_pipe/pipe.module';
import { CashRoutingModule } from './cash-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    CashRoutingModule,
    SharedCommonModule
  ],
  declarations: [
    CashComponent
  ]
})
export class CashModule { }

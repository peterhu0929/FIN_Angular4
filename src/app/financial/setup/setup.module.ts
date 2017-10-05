import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {SetupRoutingModule} from './setup-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    SetupRoutingModule,
    SharedCommonModule
  ],
  declarations: [
    SetupComponent
  ]
})
export class SetupModule { }

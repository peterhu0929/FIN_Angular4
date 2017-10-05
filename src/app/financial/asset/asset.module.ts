import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {AssetRoutingModule} from './asset-routing.module';
import {SharedCommonModule} from '../../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    AssetRoutingModule,
    SharedCommonModule
  ],
  declarations: [
    AssetComponent
  ]
})
export class AssetModule { }

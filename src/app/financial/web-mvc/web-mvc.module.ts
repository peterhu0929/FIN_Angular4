import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebMvcComponent} from './web.mvc.component';
import {WebMvcRoutingModule} from './web-mvc-routing.module';
import {PipeModule} from '../../_pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    WebMvcRoutingModule,
    PipeModule,
  ],
  declarations: [
    WebMvcComponent,
  ],
})
export class WebMvcModule {
}

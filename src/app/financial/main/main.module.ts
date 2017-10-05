import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainService } from './main.service';
import { DirectiveModule } from '../../_directive/directive.module';
import { AngularMaterialModule } from '../../_shared/angular-material.module';
import { RouterModule } from '@angular/router';
import { KendoAngularModule } from '../../_shared/kendo-angular.module';
import { PipeModule } from '../../_pipe/pipe.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    AngularMaterialModule,
    KendoAngularModule,
    RouterModule,
    PipeModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
  ],
  providers: [
    MainService
  ],
})
export class MainModule { }

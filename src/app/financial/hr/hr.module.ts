import { ImageUploadModule } from 'angular2-image-upload';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrService, HR03010WMasterGridService, HR03010WDetailGridService } from './hr.service';
import { HrRoutingModule } from './hr-routing.module';
import { HR01010WComponent } from './HR01010W/HR01010W.component';
import { HR02010WComponent } from './HR02010W/HR02010W.component';
import { Hr02010WEditComponent } from './HR02010W/hr02010w-edit/hr02010w-edit.component';
import { AngularMaterialModule } from '../../_shared/angular-material.module';
import { FinDialogModule } from '../../_services/fin-dialog.module';
import { FormsModule } from '@angular/forms';
import { HR03010WComponent } from './HR03010W/HR03010W.component';
import { KendoAngularModule } from '../../_shared/kendo-angular.module';
import { PipeModule } from '../../_pipe/pipe.module';
import { HR03010WMasterGridComponent } from './hr03010w/hr03010w-master-grid/hr03010w-master-grid.component';
import { HR03010WDetailGridComponent } from './hr03010w/hr03010w-detail-grid/hr03010w-detail-grid.component';
import { FinDialogService } from '../../_services/fin-dialog/fin-dialog.service';
import { RegularExpressionService } from '../../_services/regular-expression.service';

@NgModule({
  imports: [
    CommonModule,
    HrRoutingModule,
    AngularMaterialModule,
    KendoAngularModule,
    FinDialogModule,
    FormsModule,
    PipeModule,
    ImageUploadModule.forRoot(),
  ],
  declarations: [
    HR01010WComponent,
    HR02010WComponent,
    Hr02010WEditComponent,
    HR03010WComponent,
    HR03010WMasterGridComponent,
    HR03010WDetailGridComponent
  ],
  providers: [
    HrService,
    HR03010WMasterGridService,
    HR03010WDetailGridService,
    RegularExpressionService
  ]
})
export class HrModule { }

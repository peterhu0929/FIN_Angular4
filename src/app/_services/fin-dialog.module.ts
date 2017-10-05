import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule} from '../_shared/angular-material.module';
import { FinDialogComponent } from './fin-dialog/fin-dialog.component';
import { FinDialogService } from './fin-dialog/fin-dialog.service';

@NgModule({
  declarations: [
    FinDialogComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  entryComponents: [
    FinDialogComponent,
  ],
  providers: [FinDialogService]
})
export class FinDialogModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsDetailComponent } from './collections-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CollectionsDetailComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class CollectionsDetailModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDataRoutingModule } from './basic-data-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BasicDataComponent } from './basic-data.component';

@NgModule({
  imports: [
    CommonModule,
    BasicDataRoutingModule,
    NgxDatatableModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [
    BasicDataComponent,
  ],
  providers: [

  ]
})
export class BasicDataModule { }

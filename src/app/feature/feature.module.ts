import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureComponent} from './feature.component';
import {FeatureRoutingModule} from './feature-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { ShapeComponent } from '../shape/shape.component';
import { ShapeService } from '../shared/service/shape.service';
import { ColorService } from '../shared/service/color.service';
import { FormService } from '../shared/service/form.service';
import { ImprintService } from '../shared/service/imprint.service';
import { ColorComponent } from '../color/color.component';
import { FormComponent } from '../form/form.component';
import { ImprintComponent } from '../imprint/imprint.component';
@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    FeatureComponent,
    ColorComponent,
    ShapeComponent,
    FormComponent,
    ImprintComponent
  ],
  providers: [
    ColorService,
    ShapeService,
    FormService,
    ImprintService
  ],
})
export class FeatureModule { }

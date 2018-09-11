import { Component, OnInit } from '@angular/core';
import { BrandNameService } from '../../shared/service/brand-name.service';
import { GenericNameService } from '../../shared/service/generic-name.service';
import { ThaiFDAService } from '../../shared/service/thai-fda.service';
import { FormService } from '../../shared/service/form.service';
import { ShapeService } from '../../shared/service/shape.service';
import { ColorService } from '../../shared/service/color.service';
import { MimsService } from '../../shared/service/mims.service';
import { FactoryService } from '../../shared/service/factory.service';
import { element } from '@angular/core/src/render3/instructions';
import { MedicinesService } from '../../shared/service/medicines.service';
import { IOption } from 'ng-select';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public temp = {
    brandName: '',
    genericName: '',
    thaiFDA: '',
    form: '',
    shape: '',
    color: '',
    mimsClass: '',
    scoring: '',
    logo: '',
    marking: '',
    manufacturer: '',
  }
  public brandName: Array<IOption>;
  public genericName: Array<IOption>;
  public thaiFDA: Array<IOption>;
  public form: Array<IOption>;
  public shape: Array<IOption>;
  public color: Array<IOption>;
  public mimsClass: Array<IOption>;
  public scoring: Array<IOption>;
  public logo: Array<IOption>;
  public marking: Array<IOption>;
  public manufacturer: Array<IOption>;
  public backup = [];

  constructor(
    private brandNameService: BrandNameService,
    private genericNameService: GenericNameService,
    private thaiFDAService: ThaiFDAService,
    private formService: FormService,
    private shapeService: ShapeService,
    private colorService: ColorService,
    private mimsService: MimsService,
    private factoryService: FactoryService,
    private medicinesService: MedicinesService,
  ) { }

  ngOnInit() {
    this.brandNameService.getAllBrandName().subscribe((result) => {
      for (let i = 0; i < result.length; i++)
        this.backup.push({ value: result[i].brandName, label: result[i].brandName })
      this.brandName = this.backup;
      this.backup = [];
    });
    this.genericNameService.getAllGenericName().subscribe((result) => {
      for (let i = 0; i < result.length; i++)
        this.backup.push({ value: result[i].genericName, label: result[i].genericName })
      this.genericName = this.backup;
      this.backup = [];
    });
    this.thaiFDAService.getAllThaiFDA().subscribe((result) => {
      for (let i = 0; i < result.length; i++)
        this.backup.push({ value: result[i].initialThaiFDA, label: result[i].initialThaiFDA })
      this.thaiFDA = this.backup;
      this.backup = [];
    });
    this.formService.getAllForm().subscribe((result) => {
      for (let i = 0; i < result.length; i++)
        this.backup.push({ value: result[i].form, label: result[i].form })
      this.form = this.backup;
      this.backup = [];
    });
    this.shapeService.getAllShape().subscribe((result) => {
      for (let i = 0; i < result.length; i++)
        this.backup.push({ value: result[i].shape, label: result[i].shape })
      this.shape = this.backup;
      this.backup = [];
    });
    this.colorService.getAllColor().subscribe((result) => {
      for (let i = 0; i < result.length; i++)
        this.backup.push({ value: result[i].color, label: result[i].color })
      this.color = this.backup;
      this.backup = [];
    });
    this.mimsService.getAllMims().subscribe((result) => {
      for (let i = 0; i < result.length; i++)
        this.backup.push({ value: result[i].mimsClass, label: result[i].mimsClass })
      this.mimsClass = this.backup;
      this.backup = [];
    });
    this.factoryService.getAllFactory().subscribe((result) => {
      for (let i = 0; i < result.length; i++)
        this.backup.push({ value: result[i].factory, label: result[i].factory })
      this.manufacturer = this.backup;
      this.backup = [];
    });
  }

  clearTemp() {
    this.temp = {
      brandName: '',
      genericName: '',
      thaiFDA: '',
      form: '',
      shape: '',
      color: '',
      mimsClass: '',
      scoring: '',
      logo: '',
      marking: '',
      manufacturer: '',
    }
  }

  search() {
    this.medicinesService.searchMedicines(this.temp).subscribe((result) => {
      console.log(result);
    });
  }

}

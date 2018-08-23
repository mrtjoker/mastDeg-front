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
  public brandName = [];
  public genericName = [];
  public thaiFDA = [];
  public form = [];
  public shape = [];
  public color = [];
  public mimsClass = [];
  public scoring = [];
  public logo = [];
  public marking = [];
  public manufacturer = [];
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
      result.forEach(element => { this.brandName.push(element.brandName); });
    });
    this.genericNameService.getAllGenericName().subscribe((result) => {
      result.forEach(element => { this.genericName.push(element.genericName); });
    });
    this.thaiFDAService.getAllThaiFDA().subscribe((result) => {
      result.forEach(element => { this.thaiFDA.push(element.initialThaiFDA); });
    });
    this.formService.getAllForm().subscribe((result) => {
      result.forEach(element => { this.form.push(element.form); });
    });
    this.shapeService.getAllShape().subscribe((result) => {
      result.forEach(element => { this.shape.push(element.shape); });
    });
    this.colorService.getAllColor().subscribe((result) => {
      result.forEach(element => { this.color.push(element.color); });
    });
    this.mimsService.getAllMims().subscribe((result) => {
      result.forEach(element => { this.mimsClass.push(element.mimsClass); });
    });
    this.factoryService.getAllFactory().subscribe((result) => {
      result.forEach(element => { this.manufacturer.push(element.factory); });
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

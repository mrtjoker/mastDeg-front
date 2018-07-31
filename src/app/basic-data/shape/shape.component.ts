import { Component, OnInit } from '@angular/core';
import { ShapeService } from '../../shared/service/shape.service';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class ShapeComponent implements OnInit {
  public rows = [{ name: 'วงกลม' }, { name: 'วงรี' }, { name: 'สี่เหลี่ยม' }];
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public val: string;
  constructor(private shapeService: ShapeService) { }

  ngOnInit() {
    this.tempFilter = [...this.rows];
    this.rowsFilter = this.rows;
    this.shapeService.getAllShape().subscribe((result) => {
      console.log(result);
    }); 
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempFilter.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rowsFilter = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  insert(){
    this.shapeService.addShape(this.val).subscribe(() => {
    });
  }

}

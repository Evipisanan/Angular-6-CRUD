import { Component, OnInit } from '@angular/core';
import {AdUnit} from '../../model/AdUnit';
import {AdunitService} from '../../adunit.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];

  constructor(private adunitservice: AdunitService) { }

  ngOnInit() {
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
        this.adunits = data;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { laboData } from './labo-data';
@Component({
  selector: 'app-laboratoire',
  templateUrl: './laboratoire.component.html',
  styleUrls: ['./laboratoire.component.scss']
})
export class LaboratoireComponent implements OnInit {

  collapsed = false;
  laboData = laboData;

  constructor() { }

  ngOnInit(): void {
  }

}

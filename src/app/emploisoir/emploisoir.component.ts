import { Component, OnInit } from '@angular/core';
import { empsData } from './emps-data';

@Component({
  selector: 'app-emploisoir',
  templateUrl: './emploisoir.component.html',
  styleUrls: ['./emploisoir.component.scss']
})
export class EmploisoirComponent implements OnInit {
  collapsed = false;
  empsData = empsData;

  constructor() { }

  ngOnInit(): void {
  }

}

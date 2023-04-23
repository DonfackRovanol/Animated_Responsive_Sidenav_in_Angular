import { Component, OnInit } from '@angular/core';
import { empjData } from './empj-data';
@Component({
  selector: 'app-emploijour',
  templateUrl: './emploijour.component.html',
  styleUrls: ['./emploijour.component.scss']
})
export class EmploijourComponent implements OnInit {
  collapsed = false;
  empjData = empjData;

  constructor() { }

  ngOnInit(): void {
  }

}

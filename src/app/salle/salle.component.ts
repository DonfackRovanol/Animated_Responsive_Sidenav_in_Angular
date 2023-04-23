import { Component, OnInit } from '@angular/core';
import { lienData } from '../salle/sal-data';


@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {
  collapsed = false;
  lienData = lienData;

  constructor() { }

  ngOnInit(): void {
  }

}

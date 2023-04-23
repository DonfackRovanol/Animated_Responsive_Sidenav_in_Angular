import { Component, OnInit } from '@angular/core';
import { atlData } from './atl-data';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.scss']
})
export class AtelierComponent implements OnInit {

  collapsed = false;
  atlData = atlData;

  constructor() { }

  ngOnInit(): void {
  }

}

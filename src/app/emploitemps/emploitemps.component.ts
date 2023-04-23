import { Component, OnInit } from '@angular/core';
import { empData } from './emp-data';
@Component({
  selector: 'app-emploitemps',
  templateUrl: './emploitemps.component.html',
  styleUrls: ['./emploitemps.component.scss']
})
export class EmploitempsComponent implements OnInit {
  collapsed = false;
  empData = empData;

  constructor() { }

  ngOnInit(): void {
  }

}

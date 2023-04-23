import { Component, OnInit } from '@angular/core';
import { ajoutData } from './ajout-data';
import { matiere } from './ajout-data';
import { logiciel } from './ajout-data';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GestionmatService } from '../service/gestionmat.service';

@Component({
  selector: 'app-ajoutmat',
  templateUrl: './ajoutmat.component.html',
  styleUrls: ['./ajoutmat.component.scss']
})
export class AjoutmatComponent implements OnInit {
  collapsed = false;
  ajoutData = ajoutData;

  matiereValue!:FormGroup;
  logicielValue!:FormGroup;

  matiereObj:matiere= new matiere;
  matiereList:any=[];
  logicielObj:logiciel= new logiciel;
  logicielList:any=[];

  btnSaveShow:boolean=true;
  btnUpdateShow:boolean=false;
  
  constructor(private formbulder:FormBuilder, private mat:GestionmatService) { }

  ngOnInit(): void {
    this.matiereValue = this.formbulder.group({
      id_matiere:[''],
      nom_matiere:[''],
      equipement_necessaire:[''],
    })
    this.getmatiere();
  }

  getmatiere(){
    this.mat.getmatiere().subscribe(res =>{
      this.matiereList = res;
    })
  }
  

}

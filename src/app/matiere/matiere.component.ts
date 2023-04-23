import { Component, OnInit } from '@angular/core';
import { matData } from './mat-data';
import { matiere } from './mat-data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GestionmatService } from '../service/gestionmat.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {
  collapsed = false;
  matData = matData;

  matiereValue!:FormGroup;

  matiereObj:matiere= new matiere;
  matiereList:any=[];

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

  editmatiere(data:any){
    this.matiereValue.controls['nom_matiere'].setValue(data.nom_matiere);
    this.matiereValue.controls['equipement_necessaire'].setValue(data.equipement_necessaire);
    this.matiereObj.id_matiere = data.id_matiere;
    this.showUpdate();
  }

  updatematiere() {

    this.matiereObj.nom_matiere = this.matiereValue.value.nom_matiere;
    this.matiereObj.equipement_necessaire = this.matiereValue.value.equipement_necessaire;

    this.mat.putmatiere(this.matiereObj, this.matiereObj.id_matiere).subscribe({next: (v) =>{
      console.log(v)
    },
    error: (e) => {
      console.log(e)
      Swal.fire({
        icon: 'error',
        title:'Error!',
        html: 'Error',
                
        confirmButtonText:'OK',
      });
    },
    complete: () => {
      console.log('enseignant a été modifier avec succée')
      return Swal.fire({
        icon: 'success',
        title:'Succès!',
        html: 'enseignant a été modifier avec succée !',
        confirmButtonText:'OK',
      });
      this.getmatiere();
      this.matiereValue.reset();
      this.showSave();
      this.matiereObj.id_matiere;
    }
    })

  }

  deletematiere(data:any) {
    this.mat.deletmatiere(data.id_matiere).subscribe({next: (v) => {
      console.log(v)
    },
    error: (e) => {
      console.log(e)
      Swal.fire({
        icon: 'error',
        title:'Error!',
        html: 'Error',
                
        confirmButtonText:'OK',
      });
    },
    complete: () => {
      console.log('matiere a été supprimer avec succée')
      return Swal.fire({
        icon: 'success',
        title:'Succès!',
        html: 'matiere a été supprimer avec succée !',
        confirmButtonText:'OK',
      });
      this.getmatiere();
    }
    })
  }

  showSave() {
    this.btnSaveShow=true;
    this.btnUpdateShow=false;
  }

  showUpdate() {
    this.btnSaveShow=false;
    this.btnUpdateShow=true;
  }

}

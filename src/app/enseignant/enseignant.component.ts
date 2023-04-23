import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GestionensService } from '../service/gestionens.service';
import { enseignant } from './enseignant.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {

  enseignantValue!:FormGroup;

  enseignantObj:enseignant= new enseignant;
  enseignantList:any=[];

  btnSaveShow:boolean=true;
  btnUpdateShow:boolean=false;

  constructor(private formbulder:FormBuilder, private ens:GestionensService) { }

  ngOnInit(): void {
    this.enseignantValue = this.formbulder.group({
      nom_enseignant:[''],
      prenom_enseignant:[''],
      tel:[''],
      email:['']
    })
    this.getenseignant();
  }

  getenseignant(){
    this.ens.getenseignant().subscribe(res =>{
      this.enseignantList = res;
    })
  }

  addenseignant(){

    this.enseignantObj.nom_enseignant = this.enseignantValue.value.nom_enseignant;
    this.enseignantObj.prenom_enseignant = this.enseignantValue.value.prenom_enseignant;
    this.enseignantObj.tel = this.enseignantValue.value.tel;
    this.enseignantObj.email = this.enseignantValue.value.email;

    this.ens.postenseignant(this.enseignantObj).subscribe({next: (v) => {
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
      console.log('enseignant a été ajouter avec succée')
      return Swal.fire({
        icon: 'success',
        title:'Succès!',
        html: 'enseignant a été ajouter avec succée',
        confirmButtonText:'OK',
      });
    }
    })
  }
  
  editenseignant(data:any){
    this.enseignantValue.controls['nom_enseignant'].setValue(data.nom_enseignant);
    this.enseignantValue.controls['prenom_enseignant'].setValue(data.prenom_enseignant);
    this.enseignantValue.controls['tel'].setValue(data.tel);
    this.enseignantValue.controls['email'].setValue(data.email);
    this.enseignantObj.id_enseignant = data.id_enseignant;
    this.showUpdate();
  }

  updateenseignant() {

    this.enseignantObj.nom_enseignant = this.enseignantValue.value.nom_enseignant;
    this.enseignantObj.prenom_enseignant = this.enseignantValue.value.prenom_enseignant;
    this.enseignantObj.tel = this.enseignantValue.value.tel;
    this.enseignantObj.email = this.enseignantValue.value.email;

    this.ens.putenseignant(this.enseignantObj, this.enseignantObj.id_enseignant).subscribe({next: (v) =>{
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
      this.getenseignant();
      this.enseignantValue.reset();
      this.showSave();
      this.enseignantObj.id_enseignant;
    }
    })

  }

  deletenseignant(data:any) {
    this.ens.deletenseignant(data.id_enseignant).subscribe({next: (v) => {
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
      console.log('enseignant a été supprimer avec succée')
      return Swal.fire({
        icon: 'success',
        title:'Succès!',
        html: 'enseignant a été supprimer avec succée !',
        confirmButtonText:'OK',
      });
      this.getenseignant();
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

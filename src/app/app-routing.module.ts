import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { AccueilComponent } from "./accueil/accueil.component";
import { AideComponent } from './aide/aide.component';
import { AjoutmatComponent } from './ajoutmat/ajoutmat.component';
import { AtelierComponent } from './atelier/atelier.component';
import { ClasseComponent } from "./classe/classe.component";
import { DeconnectionComponent } from './deconnection/deconnection.component';
import { EmploijourComponent } from './emploijour/emploijour.component';
import { EmploisoirComponent } from './emploisoir/emploisoir.component';
import { EmploitempsComponent } from "./emploitemps/emploitemps.component";
import { EnseignantComponent } from "./enseignant/enseignant.component";
import { LaboratoireComponent } from './laboratoire/laboratoire.component';
import { MatiereComponent } from "./matiere/matiere.component";
import { SalleComponent } from "./salle/salle.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
    {path: 'accueil', component: AccueilComponent},
    {path: 'classe', component: ClasseComponent},
    {path: 'salle', component: SalleComponent},
    {path: 'matiere', component: MatiereComponent},
    {path: 'enseignant', component: EnseignantComponent},
    {path: 'emploitemps', component: EmploitempsComponent},
    {path: 'aide', component: AideComponent},
    {path: 'deconnection', component: DeconnectionComponent},
    {path: 'laboratoire', component: LaboratoireComponent},
    {path: 'atelier', component: AtelierComponent},
    {path: 'ajoutmat', component: AjoutmatComponent},
    {path: 'emploijour', component: EmploijourComponent},
    {path: 'emploisoir', component: EmploisoirComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

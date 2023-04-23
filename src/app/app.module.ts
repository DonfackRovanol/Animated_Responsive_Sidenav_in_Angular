import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClasseComponent } from './classe/classe.component';
import { SalleComponent } from './salle/salle.component';
import { MatiereComponent } from './matiere/matiere.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EmploitempsComponent } from './emploitemps/emploitemps.component';
import { AideComponent } from './aide/aide.component';
import { DeconnectionComponent } from './deconnection/deconnection.component';
import { LaboratoireComponent } from './laboratoire/laboratoire.component';
import { AtelierComponent } from './atelier/atelier.component';
import { AjoutmatComponent } from './ajoutmat/ajoutmat.component';
import { EmploijourComponent } from './emploijour/emploijour.component';
import { EmploisoirComponent } from './emploisoir/emploisoir.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    AccueilComponent,
    ClasseComponent,
    SalleComponent,
    MatiereComponent,
    EnseignantComponent,
    EmploitempsComponent,
    AideComponent,
    DeconnectionComponent,
    LaboratoireComponent,
    AtelierComponent,
    AjoutmatComponent,
    EmploijourComponent,
    EmploisoirComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

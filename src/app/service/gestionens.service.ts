import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionensService {

  constructor(private HttpClient: HttpClient) { }

  getenseignant(){
    return this.HttpClient.get<any>("").pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  postenseignant(data:any){
    return this.HttpClient.get<any>("", data).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  putenseignant(data:any,id:any ) {
    return this.HttpClient.put<any>(""+id, data).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  deletenseignant(id:any) {
    return this.HttpClient.delete<any>(""+id).pipe(
      map(
        (res => {
          return res;
        })
      )
    )
  }

}

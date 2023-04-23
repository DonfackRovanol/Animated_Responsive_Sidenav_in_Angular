import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionmatService {

  constructor(private HttpClient: HttpClient) { }

  getmatiere(){
    return this.HttpClient.get<any>("").pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  postmatiere(data:any){
    return this.HttpClient.get<any>("", data).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  putmatiere(data:any,id:any ) {
    return this.HttpClient.put<any>(""+id, data).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  deletmatiere(id:any) {
    return this.HttpClient.delete<any>(""+id).pipe(
      map(
        (res => {
          return res;
        })
      )
    )
  }
}

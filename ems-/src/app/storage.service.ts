import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

 public  alert(){
    console.log("hi")
    alert("hi")
  }
}

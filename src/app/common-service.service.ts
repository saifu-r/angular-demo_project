import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  myNmae(){
    return 'I am Saifur from service'
  }

  
}

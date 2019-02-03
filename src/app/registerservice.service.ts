import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { registermodel } from './register/registermodel';
import { loginmodel } from './add-account/loginmodel';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {
  constructor(private http:HttpClient,private r:Router){}
 
  aruser;
urating(){
  return this.http.get('http://localhost:3000/rating');
 console.log('urating');
}

 setuser(req){

  this.aruser=req;
  console.log(req);
 this.r.navigate(['/dashboard']);

}

returnuser(){
  console.log(this.aruser);
  return this.aruser;
}  
/* sequen(){
  return this.http.get('http://localhost:3000/tab_sequence');
}
anews;
setseq(h){
this.anews=h;
console.log(this.anews);
}

sendseq(){
  return this.anews;
}  */ 
 

  user:registermodel;
  add1(user)
  {
    console.log(user);
  return this.http.post("http://localhost:3000/register", user).subscribe((res)=>
  {
    console.log('done');
 this.r.navigate(['/login']);
});

  }
  setTkn(j:string)
  {
  	localStorage.setItem('x-token', j);
  }
  getTkn()
    {
      return localStorage.getItem('x-token');
    }
    delToken(){
      return localStorage.removeItem('x-token');
    }
  add(j:loginmodel): Observable<HttpResponse<loginmodel>>
  {
    return this.http.post<loginmodel>("http://localhost:3000/login", j, {observe: 'response'});
    }
  //user login token
}


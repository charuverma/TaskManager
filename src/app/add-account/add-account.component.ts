import { Component, OnInit } from '@angular/core';
import { loginmodel } from './loginmodel';
import { RegisterserviceService } from '../registerservice.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor( private v:RegisterserviceService,private r:Router) { }
  ul:loginmodel;
  c;
  ab;
  bb;
  d:Subscription;
  b:Subscription;
  n:Subscription;
  tempToken;
  btn(c:number){
    this. ul=new loginmodel(c);
    console.log(this.ul);

    this.c = this.v.add(this.ul);
    this.d = this.c.subscribe( (data) => {
      this.tempToken = data.headers.get('x-token');
      this.v.setTkn(this.tempToken);
      this.r.navigate(['/dashboard']);
   /*  },
    (err)=>
    {
      console.log(err);
    },
    () =>{
      console.log("User Data Checks Out"); */
      
    });
      this.ab = this.v.urating();
    this.n = this.ab.subscribe((req)=>{
      console.log(req);
       this.v.setuser(req); 
      
   
    }); 
    /* console.log("hello");
    this.bb = this.v.sequen();
    this.b = this.bb.subscribe((req)=>{
      console.log(req);
       this.v.setseq(req);
     
   
    }); */ 

  }

 ngOnInit() {
  }

}


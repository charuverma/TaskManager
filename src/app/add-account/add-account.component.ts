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
  d:Subscription;
  tempToken;
  btn(c:number){
    this. ul=new loginmodel(c);
    console.log(this.ul);

    this.c = this.v.add(this.ul);
    this.d = this.c.subscribe( (data) => {
      this.tempToken = data.headers.get('x-token');
      this.v.setTkn(this.tempToken);
      this.r.navigate(['/home']);
    },
    (err)=>
    {
      console.log(err);
    },
    () =>{
      console.log("User Data Checks Out");
      
    });

  }

 ngOnInit() {
  }

}


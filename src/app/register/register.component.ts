import { Component, OnInit } from '@angular/core';
import { registermodel } from './registermodel';
import { RegisterserviceService } from '../registerservice.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor( private v:RegisterserviceService,private r:Router) { }

  ngOnInit() {
  }


  bt(f,l,u,g){
    let data=new registermodel(f.value,l.value,u.value,g.value);
    this.v.add1(data);
  }

  ngOnDestroy()
  {
  }
}

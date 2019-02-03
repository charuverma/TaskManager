import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterserviceService} from '../registerservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private r:Router,private v:RegisterserviceService) {}
 
 
    aruser = this.v.returnuser();
length=this.aruser.length ; 
   
 /*  let a=this.v.getTkn();
  if(!a)
  {
    this.r.navigate(['/login']);
  } 
  else{
    this.r.navigate(['/dashboard']);
  } */
  
 
   
  ngOnInit() {
  }

}

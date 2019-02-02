import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private r:Router,private v:RegisterserviceService) {
   /*  let a=this.v.getTkn();
    if(!a)
    {
      this.r.navigate(['/login']);
    } 
    else{
      this.r.navigate(['/dashboard']);
    } */
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
aruser;
  constructor(private r:Router,private v:RegisterserviceService) { }

  ngOnInit() {
    this.aruser = this.v.returnuser();
    /* let a=this.v.getTkn();
    if(!a)
    {
      this.r.navigate(['/login']);
    } 
    else{
      this.r.navigate(['/dashboard']);
    } */
  }

}

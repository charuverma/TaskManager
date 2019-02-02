import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full' },
 {path:'home',component:AppComponent },
  {path:'register',component:RegisterComponent},
  {path:'login',component:AddAccountComponent},
  {path:'dashboard',component:DashboardComponent},

  {path:'user',component:UserComponent},
  {path:'master',component:MasterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

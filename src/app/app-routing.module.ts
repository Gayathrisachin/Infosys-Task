import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { RegisterComponent } from './register/register.component';
import { EditCompComponent } from './edit-comp/edit-comp.component';



const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  // {path:'staff',component:StaffDashboardComponent},
  // {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  // {path:'contact',component:ContactComponent},
  {path:'form',component:StudentFormComponent},
  {path:'edit-comp',component:EditCompComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

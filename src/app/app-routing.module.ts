import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './components/charts/charts.component';
import { CreateAndEditProjectComponent } from './components/create-and-edit-project/create-and-edit-project.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"project-list",component:ProjectListComponent},
  {path :"user-profile",component:UserProfileComponent},
  {path:"create-and-edit-project",component:CreateAndEditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

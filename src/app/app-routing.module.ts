import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubusersComponent } from './githubusers/githubusers.component';
import { ViewuserComponent } from './githubusers/viewuser/viewuser.component';
const routes: Routes = [
  {
    path: '',
    component: GithubusersComponent
},

{
  path: 'gituserslist',
  component: GithubusersComponent
 },
 {
  path: 'viewuser',
  component: ViewuserComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

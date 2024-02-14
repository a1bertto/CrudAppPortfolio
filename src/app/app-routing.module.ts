import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { LogInComponent } from './log-in/log-in.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'finduser', component: UserSearchComponent },
  { path: 'login', component:LogInComponent },
  {path: 'home', component:LandingPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

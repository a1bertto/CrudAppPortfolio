import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './Services/user.service';
import { UserSearchComponent } from './user-search/user-search.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoriesService } from './repositories/repositories.service';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
const routes: Routes = [
  {path: '', component: RepositoriesComponent},
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'home',      component: RepositoriesComponent }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, RepositoriesComponent, BookmarksComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RepositoriesService]
})
export class AppModule { }


import { Component, OnInit } from '@angular/core';
import {RepositoriesService} from './repositories.service'
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  keyword;
  errMsg;
  results;
  resultsItems;
  bkmrkurl = 'https://image.ibb.co/h1XPJn/bkmrkadd.png';
  //https://image.ibb.co/d1oydn/bkmrked.png
  constructor(private repoService: RepositoriesService, private router: Router) {
    this.errMsg = "";
   }

  ngOnInit() {

  }

  // search for the keyword in git api
  searchRepos(){
    if(this.keyword != undefined && this.keyword.length > 0){
      this.results = this.repoService.getRepositories(this.keyword).subscribe( res => {
      this.results = res;
      this.resultsItems = res.items;
      console.log(this.resultsItems);
    }
    );
    }
    else{
      this.errMsg = "Please enter keyword";
    }
  }

  // send the selected repo to service 
  addBookmark(event){
    console.log(event);
    this.repoService.addRepoToSession(event);
  }

  // route to bookmark component 
  goToBookmarks(){
    this.router.navigate(['bookmarks']);
  }

}
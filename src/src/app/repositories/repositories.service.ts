import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import "rxjs/add/operator/map";

@Injectable()
export class RepositoriesService {
  // git repositories api url
  apiURL = 'https://api.github.com/search/repositories?q='
  keyword ;
  repositories;
  constructor(private http: HttpClient) {
    this.repositories = [];
   }
  
  // Get repositories using keyword using http get
  getRepositories(key){
    return this.http.get(this.apiURL + key).map(res => res);
  }

  // add bookmarked repo to seesion storage
  addRepoToSession(repo){
    // create unique key combined by id name and login name
    let key = repo.owner.login + '' + repo.owner.id + '' + repo.name;
    console.log(repo);
    // set item to session storage as json
    sessionStorage.setItem(key, JSON.stringify(repo));
  }

  // get bookmarked repos from session storage 
  getSessionRepos(){
    let storage = [];
    for(let i = 0; i < sessionStorage.length; i++){
      let key = sessionStorage.key(i);
      let value = JSON.parse(sessionStorage.getItem(key))
      storage.push(value);
    }
    return storage;
  }

}
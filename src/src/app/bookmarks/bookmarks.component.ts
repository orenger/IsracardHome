import { Component, OnInit } from '@angular/core';
import {RepositoriesService} from '../repositories/repositories.service'

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  resultsItems;
  constructor(private repoService: RepositoriesService) { }

  ngOnInit() {
    this.getFavs();
  }

  // get all bookmarked from session using service
  getFavs(){
    this.resultsItems = this.repoService.getSessionRepos();
    console.log(this.resultsItems);
  }

}
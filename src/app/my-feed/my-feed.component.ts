import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Article } from '../models/article';

@Component({
  selector: 'app-my-feed',
  templateUrl: './my-feed.component.html',
  styleUrls: ['./my-feed.component.css']
})
export class MyFeedComponent implements OnInit, AfterViewChecked {


  fromTheme: string;
  myFeed: Array<Article>;
  extrasURL: Navigation;
  constructor(private router: Router) {
    this.extrasURL = this.router.getCurrentNavigation()
    console.log(this.extrasURL.extras.state.feed);

  }

  ngOnInit(): void {

  }

  ngAfterViewChecked():void {
    this.fromTheme = this.extrasURL.extras.state.theme;
    this.myFeed= this.extrasURL.extras.state.feed;
    //console.log(this.myFeed)
  }
}

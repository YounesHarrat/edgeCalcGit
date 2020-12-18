import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-card-themed-collection',
  templateUrl: './card-themed-collection.component.html',
  styleUrls: ['./card-themed-collection.component.css']
})
export class CardThemedCollectionComponent implements OnInit {

  @Input() theme: string;
  @Input() feed?: Article[];

  articles: Article[] = [];
  myFeed: Article[]=new Array<Article>();

  apiKey: string = "ad452b911ba843b5888e81d020038524"

  constructor(private articleService: ArticleService,private router: Router) { }

  ngOnInit(): void {
    if(this.feed){
      console.log(this.feed)
    }else{
      switch (this.theme) {
        case "MyFeed": this.router.navigate(["/myFeed"], { state: {theme: this.theme , feed:this.myFeed}})
          break;
        case "News": this.fetchNewsApi()
          break;
        case "US": this.fetchUSNewsApi()
          break;
        default:
          this.fetchbyTheme(this.theme)
          break;
      }
    }

  }

  fetchArticleCards(): void {
    this.articleService.getAll().subscribe( response =>{
      this.articles = response;
    })
  }

  fetchNewsApi(): void {
    const url = 'http://newsapi.org/v2/top-headlines?' +
    'country=fr&' +
    'pageSize=10&page=1&'+
    'apiKey='+this.apiKey;
    let req = new Request(url);
    fetch(req)
        .then(function(response) {
          return response.json();
        })
        .then( resp => {
          this.articles = resp.articles;
        })
  }

  fetchUSNewsApi():void {
    const url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'pageSize=10&page=1&'+
    'apiKey='+this.apiKey;
    let req = new Request(url);
    fetch(req)
        .then(function(response) {
          return response.json();
        })
        .then( resp => {
          this.articles = resp.articles;
        })
  }

  fetchbyTheme(theme:string): void{
    const url = 'http://newsapi.org/v2/everything?' +
    'q='+theme+'&' +
    'from=2020-12-1&to=2020-12-18&'+
    'pageSize=3&page=1&'+
    'sortBy=popularity&' +
    'apiKey='+this.apiKey;;
    let req = new Request(url);
    fetch(req)
        .then(function(response) {
          return response.json();
        })
        .then( resp => {
          console.log(resp.articles)
          this.articles = resp.articles;
        })
  }

  memorizeToMyFeed(article:Article){

    // console.log(article) //trop abstrait renvoie {object} {object}
    // const ohmygod = {"id":article.source.id,"name":article.source.name};
    // forEach through myFeed to get access to article one by one
    let addtoFeed = new Article(article.theme,article.title,article.source,article.url,article.author,article.description,article.urlToImage);
    console.log(addtoFeed)
    this.myFeed.push(addtoFeed);

    this.router.navigate(["/myFeed"], { state: {theme: this.theme , feed:this.myFeed}})
  }


}

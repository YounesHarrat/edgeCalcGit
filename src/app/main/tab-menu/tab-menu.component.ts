import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {

  ThemeCollection: string[] = ['MyFeed','News','Coronavirus','US', 'Science','Divertissement', 'Sports','Jeu'];

  constructor() { }

  ngOnInit(): void {
  }

  themeIs(theme:string){
    console.log(theme)
  }
}

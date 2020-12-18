import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {

  toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggler():void {this.toggle=!this.toggle}

}

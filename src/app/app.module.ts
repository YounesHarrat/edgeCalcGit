import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material/material.module';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderToolbarComponent } from './header-nav/header-toolbar/header-toolbar.component';
import { SearchBarComponent } from './header-nav/header-toolbar/search-bar/search-bar.component';
import { QuickLinksComponent } from './header-nav/quick-links/quick-links.component';
import { ClickedCardsGridComponent } from './header-nav/quick-links/clicked-cards-grid/clicked-cards-grid.component';
import { MainComponent } from './main/main.component';
import { TabMenuComponent } from './main/tab-menu/tab-menu.component';
import { CardThemedCollectionComponent } from './main/card-themed-collection/card-themed-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './services/article.service';
import { MyFeedComponent } from './my-feed/my-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HeaderToolbarComponent,
    SearchBarComponent,
    QuickLinksComponent,
    ClickedCardsGridComponent,
    MainComponent,
    TabMenuComponent,
    CardThemedCollectionComponent,
    MyFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFeedComponent } from './my-feed/my-feed.component';

const routes: Routes = [
  {path:'myFeed',component: MyFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VotingModalComponent } from './pages/voting-modal/voting-modal.component';
import { AddStoryModalComponent } from './pages/add-story-modal/add-story-modal.component';
import { JoinSessionComponent } from './pages/join-session/join-session.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    VotingModalComponent,
    AddStoryModalComponent,
    JoinSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

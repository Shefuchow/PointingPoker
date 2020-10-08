import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VotingModalComponent } from './pages/voting-modal/voting-modal.component';
import { AddStoryModalComponent } from './pages/add-story-modal/add-story-modal.component';
import { JoinSessionComponent } from './pages/join-session/join-session.component';


const routes: Routes = [
  { path: '', redirectTo:'/joinSession', pathMatch: 'full' },
  { path: 'joinSession', component: JoinSessionComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'votingModal', component: VotingModalComponent },
  { path: 'addStoryModal', component: AddStoryModalComponent },
  { path: '**', component: JoinSessionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

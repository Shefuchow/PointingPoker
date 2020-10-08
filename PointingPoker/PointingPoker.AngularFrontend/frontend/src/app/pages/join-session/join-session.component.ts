import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-session',
  templateUrl: './join-session.component.html',
  styleUrls: ['./join-session.component.scss']
})
export class JoinSessionComponent implements OnInit {

  constructor(private router: Router) { }

  welcome:boolean=true;
  joiningSession:boolean=false;
  creatingSession:boolean=false;

  ngOnInit(): void {
  }

  joinSession(){
    this.welcome=false;
    this.creatingSession=false;
    this.joiningSession=true;
  }

  createSession(){
    this.welcome=false;
    this.joiningSession=false;
    this.creatingSession=true;
  }

  backToWelcome(){
    this.welcome=true;
    this.joiningSession=false;
    this.creatingSession=false;
  }

  // This Function should:
  // + Verify the session was created or exists
  // + Verify a name was inputted 
  // continueToHomepage(name: string, sessionid: string){
  continueToHomepage(){
    // TODO set up authService
    this.router.navigate(['homepage']);
    console.log("i");
  }

}

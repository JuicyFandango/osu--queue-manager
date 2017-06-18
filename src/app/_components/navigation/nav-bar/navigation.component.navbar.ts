import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation.component.navbar.html'
})
export class NavBarComponent implements OnInit{

  isUserLoggedIn:boolean = false;

  constructor(){
    this.isUserLoggedIn = localStorage.getItem('currentUser') != null
  }

  ngOnInit(){

  }
}

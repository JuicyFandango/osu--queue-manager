import { Component } from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'

@Component({
  selector: 'navigation-bar',
  templateUrl: './navbar.navigation.component.html'
})
export class NavBarComponent {

  isUserLoggedIn:boolean = false;

  constructor
  (
    public router: Router,
  ){
    router.events.subscribe( (val) => {
      // If the router redirects to another page, determine changes in the localStorage
      if (val instanceof NavigationEnd) {
        this.isUserLoggedIn = localStorage.getItem('currentUser') != null
      }
    });
  }

  goToLogin(isLogginOut){
    if (isLogginOut) {
      localStorage.clear()
    }
    this.router.navigate(['login'])
  }

  goToHome(){
    this.router.navigate(['home'])
  }
}

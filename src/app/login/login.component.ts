import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { LoginService } from '../_services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  model: any = {}
  isLoading: boolean = false
  returnUrl: string
  errorMsg: string = null


  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
  )
  {

    localStorage.clear()
    //TODO: kill the user login status
    this.returnUrl = this.route.snapshot.queryParams['returnUrl']
  }

  ngOnInit() {
  }

  login() {
    console.log('attempting to log in')
    this.isLoading = true;
    this.loginService.login(this.model.username, this.model.password)
      .then((loginObject: any) => {
        localStorage.setItem('connectionToken', loginObject.user)
        localStorage.setItem('currentUser', loginObject.Token)

        if (this.returnUrl) {
          this.router.navigate([this.returnUrl])
        }
        else {
          this.router.navigate(['home'])
        }
      })
      .catch((err) => {
        this.errorMsg = err
        this.isLoading = false
      })
  }

  openRegisterForm() {

  }
}

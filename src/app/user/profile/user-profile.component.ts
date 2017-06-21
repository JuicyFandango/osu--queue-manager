import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { User } from '../../_models/user'
import { UserService } from '../../_services/user.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  user:User = null;
  private sub: any;

  constructor
  (
    private userService: UserService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(){

    let id:number = null;

    this.sub = this.route.params.subscribe( params => {
      id = +params['id']
    })

    this.userService.get(id)
    .then( (user:User) =>{
      this.user = user
    })
  }
}

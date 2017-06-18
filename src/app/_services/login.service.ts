import { Injectable } from '@angular/core'
import { User, UserType } from '../_models/user'
import { UserService } from './user.service'

@Injectable()
export class LoginService {
  constructor
  (
    private userService: UserService,
  ){

  }

  /**
   * Attempts to log in into the login service, if too many attemps are made by
   * a certain IP it will block furters attemps for a limited time
   * @param  {string} username [Osu!'s username']
   * @param  {string} password [SHA1 hashed password string]
   * @return {token} [Connection TOKEN for the future's component calls]
   */
  login(username:string, password:string){
    //TODO: Implementar un servicio
    return new Promise<Object>( (resolve, reject) => {
      this.userService.get(1576498)
      .then( (_user: User) => {
        if (_user) {
          resolve({ User : _user, Token : "SUPERTOKEN" })
        }
        else{
          reject("User or password not valid")
        }

      })
    })
  }
}

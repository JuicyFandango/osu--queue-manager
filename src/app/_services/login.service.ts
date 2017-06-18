import { Injectable } from '@angular/core';
import { User, UserType } from '../_models/user';

@Injectable()
export class LoginService {
  constructor(){

  }

  /**
   * Attempts to log in into the login service, if too many attemps are made by
   * a certain IP it will block furters attemps for a limited time
   * @param  {string} username [Osu!'s username']
   * @param  {string} password [SHA1 hashed password string]
   * @return {token} [Connection TOKEN for the future's component calls]
   */
  login(username:string, password:string){
    return new Promise<Object>( (resolve, reject) => {
      //TODO: Implementar un servicio
      if (username == "CloudChaser" && password == "123") {
        let _user = new User()
        _user.name = "CloudChaser"
        _user.type = UserType.NORMAL
        //TODO: Receive generated TOKEN from login service
        resolve({ User : _user, Token : "SUPERTOKEN" })
      }else{
        reject("User or password not valid")
      }
    })
  }
}

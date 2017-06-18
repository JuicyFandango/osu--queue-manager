import { Injectable } from '@angular/core';
import { User, UserType } from '../_models/user';

@Injectable()
export class UserService {

  constructor() { }

  /**
   * Get a user from it's ID
   * @param  {number} id User's ID
   * @return {Promise<User>}   User object
   */
  get(id: number) {
    //TODO: Actual HTTP provider
    return new Promise<User>( (resolve, reject) => {
      let _user = new User()
      _user.country = "CL"
      _user.graveyardedMaps = 0
      _user.id = 1576498
      _user.isQueueOpen = true
      _user.maxQueueItems = 3
      _user.name = "Cloudchaser"
      _user.pendingMaps = 3
      _user.rankedMaps = 4
      _user.type = UserType.ADVANCED_BEATMAP_NOMINATOR

      resolve (_user)
    })
  }

  /**
   * Register an user into de server, it also blocks registration request for 5
   * minutes in order to prevent DDOS attacks
   * @param  {User}   user [description]
   * @return {[type]}      [description]
   */
  //TODO: Actual registration on Server
  register(user: User){
    return new Promise<string>( (resolve, reject) => {

    })
  }
}

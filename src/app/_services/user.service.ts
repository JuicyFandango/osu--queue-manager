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
  getUser(id: number) {
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
}

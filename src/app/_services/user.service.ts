import { Injectable } from '@angular/core';
import { User, UserType } from '../_models/user';

@Injectable()
export class UserService {

  fakeAPI:Object[] = [
    {
      id : 1576498,
      name : "Cloudchaser",
      type : 1,
      country : "CL",
      isQueueOpen : true,
      profileDescription: "★ = Yes / Accepting / in use / valid now. <br> ★ = No / Not accepting/ Not valid for now/better don't ask. ★ = Maybe / Can be discussed, you can give it a try. First Step: Conditions (need at least half of them) ★Your map doesn't exceed 6 mins long. ★Your mapset doesn't contain over 5 difficults. ★Half of your beatmap is mapped by yourself. ★You're an unexperienced mapper. ★ You respond appropriately to a mod, giving reasons and with the correct respect. ★Your map is bubbled/popped/disqualified/starred ★Your beatmap reflects dedication and affection Second Step: Status of modding ★ Ask for mods via PM in-game / forum. ★ My mutual friends can always ask for mods by PM in-game, but it doesn't mean It will be my priority. ★ Accepting mods via Modding Queue for non-friends. ★ M4M request. Third Step: Request!",
      maxAllowedInQueue : 3,
      currentItemsInQueue : 10,
      rankedMaps : 4,
      pendingMaps : 2,
      lovedMaps : 0,
      graveyardedMaps : 60,
    },
    {
      id : 1869277,
      name : "Ferret",
      type : 3,
      country : "CL",
      isQueueOpen : false,
      maxAllowedInQueue : 10,
      currentItemsInQueue : 10,
      rankedMaps : 6,
      pendingMaps : 1,
      lovedMaps : 0,
      graveyardedMaps : 5,
    }
  ]


  constructor() { }

  /**
   * Get a user from it's ID
   * @param  {number} id User's ID
   * @return {Promise<User>}   User object
   */
  get(id: number) {
    //TODO: Actual HTTP provider
    return new Promise<User>( (resolve, reject) => {
      let _index = this.fakeAPI.findIndex( user => user["id"] == id)
      let _user:any = User.mapObject(this.fakeAPI[_index]);

      if (_user) {
        resolve (_user)
      }else{
        reject("User not found")
      }
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

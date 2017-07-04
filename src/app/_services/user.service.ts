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
      profileDescription: '<div class="pack-msg"><center><h2><span style="color: #8000FF"><span style="font-weight: bold">Modding Policy</span></span></h2></center><br><span style="color: #0000FF">★</span> = Yes / Accepting / in use / valid now. <br><span style="color: #FF0000">★</span> = No / Not accepting/ Not valid for now/better dont ask.<br><span style="color: #FF8000">★</span> = Maybe / Can be discussed, you can give it a try. <br><br><span class="fontsize150"><span style="font-weight: bold">First Step: Conditions (need at least half of them)</span></span><br><ul><span style="color: #0000FF">★</span>Your map doesnt exceed 6 mins long.<br><span style="color: #0000FF">★</span>Your mapset doesnt contain over 5 difficults.<br><span style="color: #0000FF">★</span>Half of your beatmap is mapped by yourself.<br><span style="color: #0000FF">★</span><span style="font-weight: bold">Youre an unexperienced mapper.</span><br><span style="color: #0000FF">★</span> You respond appropriately to a mod, giving reasons and with the correct respect.<br><span style="color: #FF0000">★</span>Your map is bubbled/popped/disqualified/starred<br><span style="color: #0000FF">★</span><span style="font-weight: bold">Your beatmap reflects dedication and affection</span></ul><br><span class="fontsize150"><span style="font-weight: bold">Second Step: Status of modding</span></span><br><br><ul><span style="color: #FF8000">★</span> Ask for mods via PM in-game / forum. <br><span style="color: #0000FF">★</span> <span style="font-weight: bold">My mutual friends can always ask for mods by PM in-game, but it doesnt mean It will be my priority. </span><br><span style="color: #0000FF">★</span> Accepting mods via <span style="font-weight: bold"><a href="https://osu.ppy.sh/forum/t/323857&amp;start=0" class="postlink">Modding Queue</a></span> for non-friends.<br><span style="color: #FF8000">★</span> M4M request.<br></ul><br><span class="fontsize150"><span style="font-weight: bold">Third Step: Request!</span></span></div>',
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

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

export enum UserType{
  NORMAL = 1,
  QUALITY_ASSURANCE, // Quality Assurance Team
  BEGINNER_BEATMAP_NOMINATOR, // First Tier, Beginner Beatmap Nominator
  ADVANCED_BEATMAP_NOMINATOR // Second Tier Advanced Beatmap Nominator
}

//TODO: Online status where?
export class User{
  id:number
  name:string
  type:UserType
  country:string
  isQueueOpen:boolean
  maxQueueItems: number
  maxAllowedInQueue:number
  currentItemsInQueue: number
  rankedMaps:number
  pendingMaps:number
  lovedMaps:number
  graveyardedMaps:number

  constructor(){}

  static mapObject(obj:any){
    if (!obj) {
      return null
    }

    let _user = new User()

    _user.id = obj["id"]
    _user.name = obj["name"]
    _user.type = obj["type"]
    _user.country = obj["country"]
    _user.isQueueOpen = obj["isQueueOpen"]
    _user.maxQueueItems = obj["maxQueueItems"]
    _user.maxAllowedInQueue = obj["maxAllowedInQueue"]
    _user.currentItemsInQueue = obj["currentItemsInQueue"]
    _user.rankedMaps = obj["rankedMaps"]
    _user.pendingMaps = obj["pendingMaps"]
    _user.lovedMaps = obj["lovedMaps"]
    _user.graveyardedMaps = obj["graveyardedMaps"]

    return _user
  }
}

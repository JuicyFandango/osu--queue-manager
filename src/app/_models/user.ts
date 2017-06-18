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
  mapObject(obj:any){
    if (!obj) {
      return;
    }
    
    this.id = obj["id"]
    this.name = obj["name"]
    this.type = obj["type"]
    this.country = obj["country"]
    this.isQueueOpen = obj["isQueueOpen"]
    this.maxQueueItems = obj["maxQueueItems"]
    this.maxAllowedInQueue = obj["maxAllowedInQueue"]
    this.currentItemsInQueue = obj["currentItemsInQueue"]
    this.rankedMaps = obj["rankedMaps"]
    this.pendingMaps = obj["pendingMaps"]
    this.lovedMaps = obj["lovedMaps"]
    this.graveyardedMaps = obj["graveyardedMaps"]
  }
}

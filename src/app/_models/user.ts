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
  rankedMaps:number
  pendingMaps:number
  lovedMaps:number
  graveyardedMaps:number
}

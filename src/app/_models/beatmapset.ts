import { Beatmap } from './beatmap'

export enum BeatSetMapStatus {
  GRAVEYARDED = -2,
  WIP,
  PENDING,
  RANKED,
  APPROVED,
  QUALIFIED,
  LOVED
}

export enum BeatMapSetLanguage {
  ANY = 0,
  OTHER,
  ENGLISH,
  JAPANESE,
  CHINESE,
  INSTRUMENTAL,
  KOREAN,
  FRENCH,
  GERMAN,
  SWEDISH,
  SPANISH,
  ITALIAN
}

export class BeatMapSet {
  id:number
  beatmaps:Beatmap[]
  status:BeatSetMapStatus
  lastUpdatedDate:Date
  aprovedDate:Date
  creator:string
  tags:string

  /** Song info **/
  title:string
  artist:string
  language:BeatMapSetLanguage
  bpm:number
  source:string
}

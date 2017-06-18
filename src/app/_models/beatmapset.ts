import { Beatmap } from './beatmap'
import { User } from './user'

/**
 * Available status
 * @type {Number}
 */
export enum BeatSetMapStatus {
  GRAVEYARDED = -2,
  WIP,
  PENDING,
  RANKED,
  APPROVED,
  QUALIFIED,
  LOVED
}

/**
 * Available Languages
 * @type {Number}
 */
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

/**
 * Group of beatmaps
 */
export class BeatmapSet {
  id:number
  beatmaps:Beatmap[]
  status:BeatSetMapStatus
  lastUpdatedDate:Date
  aprovedDate:Date
  creator:User
  tags:string

  /** Song info **/
  title:string
  artist:string
  language:BeatMapSetLanguage
  bpm:number
  source:string
}

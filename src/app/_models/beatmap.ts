import { User } from './user'
/**
 * Enumerator of the available gameplay modes:
 * - OSU
 * - TAIKO
 * - CTB
 * - OSUMANIA
 * @type {Number}
 */
export enum BeatmapMode {
  OSU = 0,
  TAIKO,
  CTB,
  OSUMANIA
}

/**
 * Basic difficulty for gameplay purposes
 */
export class Beatmap {
  id:number
  creator:User
  diffName:string
  mode:BeatmapMode
  difficultyRating: number
}

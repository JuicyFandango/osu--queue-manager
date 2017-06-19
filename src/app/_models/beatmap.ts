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
 * Basic gameplay item
 * @return {[type]} [description]
 */
export class Beatmap {
  id:number
  creator:User
  diffName:string
  mode:BeatmapMode
  difficultyRating: number

  constructor(){}

  static mapObject(obj:Object){
    if (!obj) {
      return null;
    }

    let _bm = new Beatmap()

    _bm.id = obj['id'],
    _bm.creator = obj['creator'],
    _bm.diffName = obj['diffName'],
    _bm.mode = obj['mode'],
    _bm.difficultyRating = obj['difficultyRating']

    return _bm;
  }
}

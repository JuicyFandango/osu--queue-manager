import { Beatmap } from './beatmap'
import { User } from './user'

/**
 * Available status
 * @type {Number}
 */
export enum BeatmapsetStatus {
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
export enum BeatmapsetLanguage {
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

export enum BeatmapsetGenre {
  ANY = 0,
  UNSPECIFIED,
  VIDEO_GAME,
  ANIME,
  ROCK,
  POP,
  OTHER,
  NOVELTY,
  HIP_HOP = 9,
  ELECTRONIC
}

/**
 * Group of beatmaps
 */
export class BeatmapSet {
  id: number
  beatmaps: Beatmap[]
  status: BeatmapsetStatus
  lastUpdatedDate: Date
  aprovedDate: Date
  creator: User
  tags: string

  /** Song info **/
  title: string
  artist: string
  genre: BeatmapsetGenre
  language: BeatmapsetLanguage
  bpm: number
  source: string

  constructor() { }

  /**
   * Receives a generic object and tries to transform it to a User type object,
   * if the provided object is not valid then returns a null value
   * @param  {Object} obj [description]
   * @return {[type]}     [description]
   */
  static mapObject(obj: Object) {
    if (!obj) {
      return null
    }

    let _bms = new BeatmapSet()

    _bms.id = obj['id']
    _bms.status = obj['status']
    _bms.lastUpdatedDate = obj['lastUpdatedDate']
    _bms.aprovedDate = obj['aprovedDate']
    _bms.creator = User.mapObject(obj['creator'])
    _bms.tags = obj["tags"]
    /** Song info **/
    _bms.title = obj['title']
    _bms.artist = obj['artist']
    _bms.genre = obj['genre']
    _bms.language = obj['language']
    _bms.bpm = obj["bpm"]
    _bms.source = obj['source']

    _bms.beatmaps = []
    for (let beatmap of obj['beatmaps']) {
      _bms.beatmaps.push(Beatmap.mapObject(beatmap))
    }

    return _bms
  }
}

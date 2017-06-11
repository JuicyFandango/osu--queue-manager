export enum BeatmapMode {
  OSU = 0,
  TAIKO,
  CTV,
  OSUMANIA
}

export class Beatmap {
  id:number
  creatorId:number
  diffName:string
  mode:BeatmapMode
  difficultyRating: number
}

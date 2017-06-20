import { Injectable } from '@angular/core'
import { BeatmapSet, BeatmapsetLanguage, BeatmapsetStatus, BeatmapsetGenre } from '../_models/beatmapset'
import { Beatmap, BeatmapMode} from '../_models/beatmap';
@Injectable()
export class BeatmapService {

  private fakeApi: Object[] =
  [
    {
      id: 532555,
      beatmaps:
      [
        {
          id: 1134049,
          creator: {
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
          diffName: "Can't Stop The Jingle Bells!!!",
          mode: BeatmapMode.OSU,
          difficultyRating: 4.07
        }
      ],
      status: BeatmapsetStatus.RANKED,
      lastUpdatedDate: '2016-11-13T12:00.00.000',
      aprovedDate: '2016-12-29T12:00.00.000',
      creator: {
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
      tags: ['love', 'live', 'sunshine!!' ,'christmas', 'xmas', 'school', 'idol', 'festival', 'sif', 'project', '-nitrous', 'pentori'],
      title: 'Jingle Bells ga Tomaranai',
      artist: 'Aquors',
      genre: BeatmapsetGenre.VIDEO_GAME,
      language: BeatmapsetLanguage.JAPANESE,
      bpm: 240,
      source: 'ラブライブ！スクールアイドルフェスティバル',
    }
  ]

  constructor(){}

  getBeatmapSet(id:number){
    return new Promise<BeatmapSet>( (resolve, reject) => {
      let _index = this.fakeApi.findIndex( beatmapset => beatmapset["id"] == id)
      let _bms = BeatmapSet.mapObject(this.fakeApi[_index])

      if (_bms) {
        resolve (_bms)
      }else{
        reject("Beatmapset not found")
      }
    })
  }
}

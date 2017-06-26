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
          id: 1128459,
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
        },
        {
          id: 1134049,
          creator: {
            id : 7293512,
            name : "-Nitrous",
            type : 1,
            country : "PH",
            isQueueOpen : false,
            maxAllowedInQueue : 3,
            currentItemsInQueue : 10,
            rankedMaps : 3,
            pendingMaps : 5,
            lovedMaps : 0,
            graveyardedMaps : 18,
          },
          diffName: "Nitrou's Normal",
          mode: BeatmapMode.OSU,
          difficultyRating: 1.81
        },
        {
          id: 1134049,
          creator: {
            id : 7452237,
            name : "Pentori",
            type : 1,
            country : "AU",
            isQueueOpen : true,
            maxAllowedInQueue : 3,
            currentItemsInQueue : 10,
            rankedMaps : 4,
            pendingMaps : 1,
            lovedMaps : 0,
            graveyardedMaps : 0,
          },
          diffName: "Pentori's Hard",
          mode: BeatmapMode.OSU,
          difficultyRating: 3.08
        }
      ],
      status: BeatmapsetStatus.RANKED,
      lastUpdatedDate: Date.parse('2016-11-13'),
      aprovedDate: Date.parse('2016-12-29'),
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
      tags: 'love live sunshine!! christmas xmas school idol festival sif project -nitrous pentori',
      title: 'Jingle Bells ga Tomaranai',
      artist: 'Aquors',
      genre: BeatmapsetGenre.VIDEO_GAME,
      language: BeatmapsetLanguage.JAPANESE,
      bpm: 240,
      source: 'ラブライブ！スクールアイドルフェスティバル',
    }
  ]

  constructor(){}

  /**
   * Gets a BeatmapSet from it's ID
   * @method getBeatmapSet
   * @param  {number}      id [description]
   * @return {[type]}         [description]
   */
  getBeatmapSet(id:number){
    return new Promise<BeatmapSet>( (resolve, reject) => {
      //TODO: Replace fakeApi with an actual API
      let _index = this.fakeApi.findIndex( beatmapset => beatmapset["id"] == id)
      let _bms = BeatmapSet.mapObject(this.fakeApi[_index])

      if (_bms) {
        resolve (_bms)
      }else{
        reject(null)
      }
    })
  }

  /**
   * Gets all beatmapsets from a user which state is Pending
   * @method getUserPendingBeatmapSet
   * @param  {number}                 userId [description]
   * @return {[type]}                        [description]
   */
  getUserPendingBeatmapSet(userId:number){
    return new Promise<BeatmapSet[]>( (resolve,reject) => {
      //TODO: Replace fakeApi with an actual API
      let _result: BeatmapSet[] = [];

      for(let _unformattedbm of this.fakeApi){
        _result.push(BeatmapSet.mapObject(_unformattedbm));
      }

      resolve(_result);
    })
  }
}

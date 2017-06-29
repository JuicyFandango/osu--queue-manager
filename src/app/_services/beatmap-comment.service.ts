import { Injectable } from '@angular/core'
import { CommentQueue } from '../_models/comment-queue'
import { CommentNode } from '../_models/comment-node'

@Injectable()
export class BeatmapCommentService {
  private fakeApi: Object[] = [
    {
      beatmapSetId : 532555,
      comments : [
        {
          id: 1,
          author : {
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
          date: Date.parse('2016-12-20'),
          comment: 'This is a comment'
        }
      ]
    }
  ]

  public getComments(beatmapSetId: number){
    return new Promise<CommentQueue>( (resolve,reject) => {
      //TODO: Replace fakeApi with an actual API

      let _index = this.fakeApi.findIndex( commentQueue => commentQueue["beatmapSetId"] == beatmapSetId )

      let _result: CommentQueue = CommentQueue.mapObject(this.fakeApi[_index])
      resolve(_result);
    })
  }
}

import { Injectable } from '@angular/core'
import { CommentQueue } from '../_models/comment-queue'
import { CommentNode } from '../_models/comment-node'

@Injectable()
export class BeatmapSetCommentService {
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
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero non purus vehicula porttitor ac at dolor. Donec mattis ex vitae ante mollis, ut pretium tortor sollicitudin. Vestibulum ullamcorper volutpat diam, vel luctus tortor. Vestibulum semper ullamcorper diam semper facilisis. Nullam id lorem condimentum lorem rutrum iaculis sed id metus. Nam enim lorem, tempus in consequat eu, interdum a orci. Duis nisi est, pellentesque ut neque eu, volutpat tincidunt turpis. Vestibulum euismod, nisi a viverra vestibulum, purus lacus ornare lacus, id commodo erat quam sit amet tortor. Integer eu massa quis massa rutrum vehicula. Sed viverra venenatis magna, id semper turpis euismod id. In maximus dignissim aliquam. Etiam scelerisque maximus lacinia. Duis volutpat eleifend venenatis. Curabitur molestie maximus urna ac pellentesque. In varius velit eu libero rutrum, vel vestibulum augue varius. Integer id ultrices ligula. Etiam nec lacinia dui. Proin egestas rhoncus diam, vitae lobortis tortor dictum fringilla. Cras eget mollis lacus, ut tincidunt ex. Donec auctor fermentum interdum. Suspendisse potenti. Quisque fringilla lacus ac diam ultricies, sed vulputate mi pharetra. Sed sit amet nulla lectus. Fusce vehicula nulla ut enim porta, nec eleifend ipsum accumsan. Quisque sit amet metus eu mi consequat condimentum in eget tortor. Aenean ullamcorper nibh eget pretium congue. Praesent interdum justo tellus, sed consequat justo scelerisque vel. Sed lobortis placerat ligula, id tristique eros.'
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

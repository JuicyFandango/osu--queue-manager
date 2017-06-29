import { CommentNode } from './comment-node'

export class CommentQueue {
  beatmapSetId: number
  comments: CommentNode[]

  constructor() {}

  static mapObject(obj: object):CommentQueue {
    let _commentQueue = new CommentQueue()

    _commentQueue.beatmapSetId = obj["beatmapSetId"]
    _commentQueue.comments = []
    for ( let comment of obj["comments"] ) {
      _commentQueue.comments.push(CommentNode.mapObject(comment))
    }

    return _commentQueue
  }
}

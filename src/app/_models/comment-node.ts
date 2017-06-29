import { User } from './user'

export class CommentNode{
  id: number
  author: User
  date: Date
  comment: string

  constructor() {}

  static mapObject(obj: object) {
    let _commentNode = new CommentNode()
    
    _commentNode.id = obj["id"]
    _commentNode.author = obj["author"]
    _commentNode.date = obj["date"]
    _commentNode.comment = obj["comment"]

    return _commentNode
  }
}

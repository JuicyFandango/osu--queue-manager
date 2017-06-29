import { Component, Input, OnInit }  from '@angular/core'
import { BeatmapSetCommentService } from '../../_services/beatmap-comment.service'
import { CommentQueue } from '../../_models/comment-queue'
import { Router } from '@angular/router'

@Component({
  selector: 'beatmapSet-comments',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() beatmapSetId: number

  commentQueue: CommentQueue

  constructor (
    private beatmapSetCommentService: BeatmapSetCommentService,
    private router: Router,
  ) {

  }

  ngOnInit(){
    this.beatmapSetCommentService.getComments(this.beatmapSetId)
    .then( ( commentQueue: CommentQueue ) => {
      this.commentQueue = commentQueue
    })
  }

  goToUserProfile(userId: number){
    this.router.navigate(['user/profile', userId])
  }
}

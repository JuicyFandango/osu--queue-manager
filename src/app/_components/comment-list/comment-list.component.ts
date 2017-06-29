import { Component, Input, OnInit }  from '@angular/core'

@Component({
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() beatmapSetId: number

  constructor (

  ) {

  }

  ngOnInit(){
    
  }
}

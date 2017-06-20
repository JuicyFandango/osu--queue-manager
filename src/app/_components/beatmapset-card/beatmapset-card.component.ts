import { Component, Input, OnInit } from '@angular/core'
import { BeatmapSet } from '../../_models/beatmapset'

@Component({
  selector: 'beatmapset-card',
  templateUrl: './beatmapset-card.component.html'
})
export class BeatmapCardComponent implements OnInit {

  @Input() beatmapSet: BeatmapSet

  constructor(){

  }

  ngOnInit(){
    console.log(this.beatmapSet)
  }
}

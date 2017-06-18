import { Component, Input } from '@angular/core'
import { BeatmapSet } from '../../_models/beatmapset'

@Component({
  selector: 'beatmap-card',
  templateUrl: './beatmapset-card.component.html'
})
export class BeatmapCardComponent {

  @Input() beatmapSet: BeatmapSet

  constructor(){

  }

}

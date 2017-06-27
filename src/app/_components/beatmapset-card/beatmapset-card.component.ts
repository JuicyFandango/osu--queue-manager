import { Component, Input } from '@angular/core'
import { BeatmapSet } from '../../_models/beatmapset'
import { Router } from '@angular/router'

@Component({
  selector: 'beatmapset-card',
  templateUrl: './beatmapset-card.component.html'
})
export class BeatmapsetCardComponent {

  @Input() beatmapSet: BeatmapSet

  constructor
  (
    private router: Router,
  ){

  }

  goToProfilePage(userId: number){
    this.router.navigate(['user/profile', userId])
  }

  goToBeatmapsetDetail(bmsId: number){
    this.router.navigate(['beatmapset', bmsId])
  }
}

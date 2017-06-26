import { Component, Input } from '@angular/core'
import { BeatmapSet } from '../../_models/beatmapset'
import { Router } from '@angular/router'

@Component({
  selector: 'beatmapset-card',
  templateUrl: './beatmapset-card.component.html',
  styleUrls: ['./beatmapset-card.component.css']
})
export class BeatmapsetCardComponent {

  @Input() beatmapSet: BeatmapSet

  isInfoToggled:boolean = false;

  constructor
  (
    private router: Router,
  ){

  }

  toggleInfo(){
    this.isInfoToggled = !this.isInfoToggled
  }

  goToProfilePage(userId: number){
    this.router.navigate(['user/profile', userId])
  }

  goToBeatmapsetDetail(bmsId: number){
    this.router.navigate(['beatmapset', bmsId])
  }
}

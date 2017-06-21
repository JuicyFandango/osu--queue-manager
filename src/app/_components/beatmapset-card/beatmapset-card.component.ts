import { Component, Input } from '@angular/core'
import { BeatmapSet } from '../../_models/beatmapset'
import { Router } from '@angular/router'

@Component({
  selector: 'beatmapset-card',
  templateUrl: './beatmapset-card.component.html'
})
export class BeatmapCardComponent {

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
}

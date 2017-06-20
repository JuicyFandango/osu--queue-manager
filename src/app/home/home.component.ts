import { Component, OnInit } from '@angular/core';
import { BeatmapService } from '../_services/beatmap.service'
import { BeatmapSet } from '../_models/beatmapset'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    beatmaps: BeatmapSet[] = []

  //TODO: Infinite scrolling
  constructor
  (
    private beatmapService: BeatmapService,
    private router: Router
  ){

  }

  ngOnInit() {
    this.beatmapService.getBeatmapSet(532555).then( (bms) => {
      console.log(bms)
      this.beatmaps.push(bms)
    });
  }

  goToUserProfile(logout:boolean){
    this.router.navigate(['userProfile'], [{ logout : logout}])
  }
}

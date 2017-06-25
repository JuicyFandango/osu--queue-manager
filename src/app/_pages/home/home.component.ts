import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { BeatmapService } from '../../_services/beatmap.service'
import { BeatmapSet } from '../../_models/beatmapset'
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
    private title: Title,
    private beatmapService: BeatmapService,
    private router: Router
  ){
    this.title.setTitle('osu!QM || Home')
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

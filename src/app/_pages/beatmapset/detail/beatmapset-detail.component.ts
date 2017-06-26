import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { BeatmapService } from '../../../_services/beatmap.service'
import { BeatmapSet } from '../../../_models/beatmapset'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-beatmapset-detail',
  templateUrl: './beatmapset-detail.component.html',
})
export class BeatmapsetDetailComponent implements OnInit {

  beatmapset: BeatmapSet

  private sub:any;

  //TODO: Infinite scrolling
  constructor
  (
    private title: Title,
    private beatmapService: BeatmapService,
    private router: Router,
    private route: ActivatedRoute,
  ){

  }

  ngOnInit() {

    let id:number = 0;
    //Gets a beatmapset data form the provider to initiate
    this.sub = this.route.params.subscribe( params => {
      id = + params['id']

      this.beatmapService.getBeatmapSet(532555).then( (bms) => {
        this.beatmapset = bms;
      });
    })

  }
}

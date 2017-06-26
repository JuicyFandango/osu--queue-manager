import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { BeatmapService } from '../../../_services/beatmap.service'
import { BeatmapSet } from '../../../_models/beatmapset'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-beatmapset-detail',
  templateUrl: './beatmapset-detail.component.html',
  styleUrls: ['./beatmapset-detail.component.css'],
})
export class BeatmapsetDetailComponent implements OnInit {

  beatmapSet: BeatmapSet

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

      this.beatmapService.getBeatmapSet(id).then( (bms) => {
        this.beatmapSet = bms;
        this.title.setTitle('osu!QM || ' + this.beatmapSet.title + ' by ' + this.beatmapSet.artist)

        this.beatmapSet = bms;
      });
    })

  }
}

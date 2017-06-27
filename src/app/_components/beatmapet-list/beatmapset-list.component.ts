import { Component, Input, OnInit } from '@angular/core'
import { BeatmapSet } from '../../_models/beatmapset'
import { Router } from '@angular/router'

@Component({
  selector: 'beatmapset-list',
  templateUrl: './beatmapset-list.component.html'
})
export class BeatmapsetListComponent implements OnInit{

  @Input() beatmapSets: BeatmapSet[]

  constructor
  (
    private router: Router,
  ){

  }

  ngOnInit() {

  }

  goToBeatmapSet(bmsId: number){
    this.router.navigate(['beatmapset', bmsId])
  }
}

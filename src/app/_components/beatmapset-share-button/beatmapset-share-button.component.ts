import { Component, Input } from '@angular/core'
import { BeatmapSet } from '../../_models/beatmapset'
import { MdSnackBar } from '@angular/material'

@Component({
  selector: 'beatmapset-share-button',
  template: '<button md-raised-button fxFlex="100" color="primary" (click)="shareBeatmap(beatmapSetId)">SHARE</button>'
})
export class BeatmapSetShareComponent {

  @Input() beatmapSetId: number

  constructor
  (
    private snackBar: MdSnackBar,
  ){

  }

  shareBeatmap(bmsId:number){
    //TODO: copy to clipboard
    this.snackBar.open('Copied to clipboard!', null, { duration: 2000 })
  }
}

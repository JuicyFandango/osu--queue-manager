import { Component, Input } from '@angular/core'
import { BeatmapSet } from '../../_models/beatmapset'
import { MdSnackBar } from '@angular/material'

@Component({
  selector: 'beatmapset-subscribe-button',
  template: '<button md-raised-button fxFlex="100" color="primary" (click)="subscribeToBeatmap(beatmapSetId)">SUBSCRIBE</button>'
})
export class BeatmapSetSubscribeComponent {

  @Input() beatmapSetId: number
  constructor
  (
    private snackBar: MdSnackBar,
  ){

  }

  subscribeToBeatmap(bmsId:number){
    //TODO: Subscribe
    this.snackBar.open('Successfully subscribed!', 'Undo')
    .onAction().subscribe( () => {
      //TODO: Undo subscription
      this.snackBar.open('Subscription undone')
    })
  }
}

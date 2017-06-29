import { Component, Input } from '@angular/core'
import { BeatmapSet } from '../../_models/beatmapset'
import { MdSnackBar } from '@angular/material'

@Component({
  selector: 'beatmapset-subscribe-button',
  template: '<button [disabled]="isDisabled" md-raised-button fxFlex="100" color="primary" (click)="subscribeToBeatmap(beatmapSetId)">SUBSCRIBE</button>'
})
export class BeatmapSetSubscribeComponent {

  @Input() beatmapSetId: number

  isDisabled: boolean = true

  constructor
  (
    private snackBar: MdSnackBar,
  ){
    this.isDisabled = !(localStorage.getItem('currentUser') != null && localStorage.getItem('connectionToken') != null)
  }

  subscribeToBeatmap(bmsId:number){
    //TODO: Subscribe
    this.snackBar.open('Successfully subscribed!', 'Undo', { duration: 2000 })
    .onAction().subscribe( () => {
      //TODO: Undo subscription
      this.snackBar.open('Subscription undone', null, { duration: 2000 })
    })
  }
}

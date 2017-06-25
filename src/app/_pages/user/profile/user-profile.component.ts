import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { User } from '../../../_models/user'
import { UserService } from '../../../_services/user.service'
import { BeatmapSet } from '../../../_models/beatmapset'
import { BeatmapService } from '../../../_services/beatmap.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:User = null;
  private sub: any;

  pendingBeatmaps: BeatmapSet[];
  constructor
  (
    private title: Title,
    private userService: UserService,
    private route: ActivatedRoute,
    private bmsService: BeatmapService,
  ) {

  }

  ngOnInit(){

    let id:number = 0;

    this.sub = this.route.params.subscribe( params => {
      id = + params['id']
    })

    //Get User info
    this.userService.get(id)
    .then( (user:User) =>{
      this.user = user

      this.title.setTitle("osu!QM || " + user.name + "'s profile")

      //Get pending beatmapsets
      //TODO: Implement this
      this.bmsService.getUserPendingBeatmapSet(this.user.id)
      .then( (returned:BeatmapSet[]) => {
        this.pendingBeatmaps = returned
      });
    })

  }
}

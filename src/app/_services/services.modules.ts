import { NgModule } from '@angular/core'

import { UserService } from './user.service'
import { LoginService } from './login.service'
import { BeatmapService } from './beatmap.service'
import { BeatmapSetCommentService } from './beatmap-comment.service'

@NgModule({
  providers: [
    UserService,
    LoginService,
    BeatmapService,
    BeatmapSetCommentService,
  ]
})

export class ServicesModule { }

import { NgModule } from '@angular/core'

import { UserService } from './user.service'
import { LoginService } from './login.service'
import { BeatmapService } from './beatmap.service'

@NgModule({
  providers: [
    UserService,
    LoginService,
    BeatmapService,
  ]
})

export class ServicesModule { }

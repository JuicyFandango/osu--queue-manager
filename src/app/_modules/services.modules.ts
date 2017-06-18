import { NgModule } from '@angular/core'

import { UserService } from '../_services/user.service'
import { LoginService } from '../_services/login.service'
import { BeatmapService } from '../_services/beatmap.service'

@NgModule({
  providers: [
    UserService,
    LoginService,
    BeatmapService,
  ]
})

export class ServicesModule { }

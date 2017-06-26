import { NgModule } from '@angular/core'

import { UserTypePipe } from './user/userType.Pipe'
import { BeatmapsetGenrePipe } from './beatmapset/beatmapsetGenre.Pipe'
import { BeatmapsetLanguagePipe } from './beatmapset/beatmapsetLanguage.Pipe'
import { BeatmapsetStatusPipe } from './beatmapset/beatmapsetStatus.Pipe'

@NgModule({
  declarations: [
    UserTypePipe,
    BeatmapsetGenrePipe,
    BeatmapsetLanguagePipe,
    BeatmapsetStatusPipe,
  ],
  exports: [
    UserTypePipe,
    BeatmapsetGenrePipe,
    BeatmapsetLanguagePipe,
    BeatmapsetStatusPipe,
  ]
})

export class PipeModule { }

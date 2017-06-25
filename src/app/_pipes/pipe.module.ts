import { NgModule } from '@angular/core'

import { UserTypePipe } from './userType.Pipe'
import { BeatmapsetGenrePipe } from './beatmapsetGenre.Pipe'
import { BeatmapsetLanguagePipe } from './beatmapsetLanguage.Pipe'
import { BeatmapsetStatusPipe } from './beatmapsetStatus.Pipe'

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

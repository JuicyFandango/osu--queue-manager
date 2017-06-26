import { NgModule } from '@angular/core'

import { UserTypePipe } from './user/user-type.Pipe'
import { BeatmapModePipe } from './beatmap/beatmap-mode.pipe'
import { BeatmapsetGenrePipe } from './beatmapset/beatmapset-genre.Pipe'
import { BeatmapsetLanguagePipe } from './beatmapset/beatmapset-language.Pipe'
import { BeatmapsetStatusPipe } from './beatmapset/beatmapset-status.Pipe'

@NgModule({
  declarations: [
    UserTypePipe,
    BeatmapsetGenrePipe,
    BeatmapsetLanguagePipe,
    BeatmapsetStatusPipe,
    BeatmapModePipe,
  ],
  exports: [
    UserTypePipe,
    BeatmapsetGenrePipe,
    BeatmapsetLanguagePipe,
    BeatmapsetStatusPipe,
    BeatmapModePipe,
  ]
})

export class PipeModule { }

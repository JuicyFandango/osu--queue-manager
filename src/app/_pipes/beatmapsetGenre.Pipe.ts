import { Pipe, PipeTransform } from '@angular/core'
import { BeatmapsetGenre } from '../_models/beatmapset'

@Pipe({
  name: 'BeatmapsetGenre'
})
export class BeatmapsetGenrePipe implements PipeTransform {

  transform(value: BeatmapsetGenre){
    return <string>(BeatmapsetGenre[value].charAt(0).toUpperCase() + BeatmapsetGenre[value].substring(1).toLowerCase()).replace('_',' ');
  }
}

import { Pipe, PipeTransform } from '@angular/core'
import { BeatmapMode } from '../../_models/beatmap'

@Pipe({
  name: 'BeatmapMode'
})
export class BeatmapModePipe implements PipeTransform {

  transform(value: BeatmapMode){
    return <string>(BeatmapMode[value].charAt(0).toUpperCase() + BeatmapMode[value].substring(1).toLowerCase()).replace('_',' ');
  }
}

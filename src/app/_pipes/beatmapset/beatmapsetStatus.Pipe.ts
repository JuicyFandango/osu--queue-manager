import { Pipe, PipeTransform } from '@angular/core'
import { BeatmapsetStatus } from '../../_models/beatmapset'

@Pipe({
  name: 'BeatmapSetStatus'
})
export class BeatmapsetStatusPipe implements PipeTransform {

  transform(value: BeatmapsetStatus){
    return <string>(BeatmapsetStatus[value].charAt(0).toUpperCase() + BeatmapsetStatus[value].substring(1).toLowerCase()).replace('_',' ');
  }
}

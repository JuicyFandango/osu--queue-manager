import { Pipe, PipeTransform } from '@angular/core'
import { BeatmapsetLanguage } from '../../_models/beatmapset'

@Pipe({
  name: 'BeatmapSetLanguage'
})
export class BeatmapsetLanguagePipe implements PipeTransform {

  transform(value: BeatmapsetLanguage){
    return <string>(BeatmapsetLanguage[value].charAt(0).toUpperCase() + BeatmapsetLanguage[value].substring(1).toLowerCase()).replace('_',' ');
  }
}

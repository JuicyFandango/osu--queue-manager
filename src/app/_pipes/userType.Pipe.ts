import { Pipe, PipeTransform } from '@angular/core'
import { UserType } from '../_models/user'

@Pipe({
  name: 'UserType'
})
export class UserTypePipe implements PipeTransform {

  transform(value: UserType){
    return <string>(UserType[value].charAt(0).toUpperCase() + UserType[value].substring(1).toLowerCase()).replace('_',' ');
  }
}

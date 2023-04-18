import {Pipe, PipeTransform} from '@angular/core'
import { Patient } from '../interfaces/patient'

@Pipe({
  name:'search'
})

export class SearchPipe implements PipeTransform {
  transform(value: Patient[], filterText:string): Patient[] {
      if(value.length === 0 || filterText === ''){
        return value
      }
      let filtered:Patient[]=[]
      for (let item of value){
        // if(!item.hospital_card_no.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase())){
        //   filtered.push(item)
        // }
        if(!item.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase())){
          filtered.push(item)
        }
      }
      return filtered
  }
}

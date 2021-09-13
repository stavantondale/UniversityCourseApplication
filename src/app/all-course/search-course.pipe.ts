import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCourse'
})
export class SearchCoursePipe implements PipeTransform {

  transform(value: any, searchC: any): any {
    
    return value.filter(function(search){
      return search.courseName.toLowerCase().indexOf(searchC.toLowerCase()) > -1;
    });
    
  }

}

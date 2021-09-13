import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchApplication'
})
export class SearchApplicationPipe implements PipeTransform {

  transform(value: any, searchQuery: any) {
    if(!searchQuery)
      return value;
    return value.filter(function(search){
      return search.applicant.applicantName.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }

}

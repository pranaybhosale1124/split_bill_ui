import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {
  transform(value: string, searchText: string): string {
    if (!searchText || searchText.trim() === '') {
      return value;
    }

    const searchRegex = new RegExp(searchText, 'ig');
    return value.replace(searchRegex, match => `<span style="background-color:yellow">${match}</span>`);
  }
}

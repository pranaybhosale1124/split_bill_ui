import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter'
})
export class FilterPipe implements PipeTransform {

  transform(contacts: any[], searchText: string): any[] {
    if (!searchText || searchText.trim() === '') {
      return contacts;
    }

    const searchTerm = searchText.toLowerCase();

    return contacts.filter((contact: any) => {
      return (
        contact.user_name.toLowerCase().includes(searchTerm) ||
        contact.user_contact_number.includes(searchTerm)
      );
    });
  }

}

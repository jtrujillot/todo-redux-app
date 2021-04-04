import { Pipe, PipeTransform } from '@angular/core';
import { validFilter } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], filter: validFilter): any {
    switch(filter) {
      case 'completed': return value.filter(todo=> todo.completed);
      case 'pending': return value.filter(todo => !todo.completed);
      default: return value;
    }
  }

}

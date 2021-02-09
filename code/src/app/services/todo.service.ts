import { Injectable } from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Injectable()
export class TodoService {
    getTodoList(): TodoItem[] {
        return [
            {
                task: 'Huis schoonmaken',
                completed: false
            },
            {
                task: 'Afval buiten zetten',
                completed: false
            }
        ];
    }
}

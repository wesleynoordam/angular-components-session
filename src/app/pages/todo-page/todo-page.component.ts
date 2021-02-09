import { Component, ViewChild } from '@angular/core';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {
  addItemVisible = false;

  @ViewChild(TodoListComponent, {static: true}) todoList!: TodoListComponent;

  toggleAddItemVisible(): void {
    this.addItemVisible = !this.addItemVisible;
  }

  addTask(task: string): void {
    this.toggleAddItemVisible();
    this.todoList.addTask(task);
  }
}

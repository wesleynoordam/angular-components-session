import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/TodoItem';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoItemList: TodoItem[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoItemList = this.todoService.getTodoList();
  }

  addTask(task: string): void {
    const todoItem: TodoItem = {
      task: task,
      completed: false
    };

    this.todoItemList.push(todoItem);
  }
}

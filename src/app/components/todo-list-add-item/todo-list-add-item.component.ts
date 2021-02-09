import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list-add-item',
  templateUrl: './todo-list-add-item.component.html',
  styleUrls: ['./todo-list-add-item.component.scss']
})
export class TodoListAddItemComponent {
  taskFormGroup: FormGroup;
  taskFormControl = new FormControl('', [
    Validators.required
  ]);

  @Output() addTask = new EventEmitter<string>();

  constructor(fb: FormBuilder) {
    this.taskFormGroup = fb.group({
      task: this.taskFormControl
    });
  }

  onSubmit(): void {
    if (this.taskFormGroup.valid) {
      this.addTask.emit(this.taskFormControl.value);
    }
  }
}

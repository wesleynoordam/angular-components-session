import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { MaterialModule } from './material.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListAddItemComponent } from './components/todo-list-add-item/todo-list-add-item.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { BorderWrapperComponent } from './components/border-wrapper/border-wrapper.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    TodoListComponent,
    TodoListAddItemComponent,
    TodoListItemComponent,
    BorderWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

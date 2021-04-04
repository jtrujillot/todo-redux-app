import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import { deleteToDo, editToDo, toggle } from '../storage/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputText',null) txtInputHtml: ElementRef;

  isCompleted: FormControl;
  text: FormControl;
  editing: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isCompleted = new FormControl(this.todo.completed);
    this.text = new FormControl(this.todo.text, Validators.required);
    this.editing = false;
    this.isCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(toggle({id:this.todo.id}))
    });
  }

  enableEdit() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputHtml.nativeElement.select();
    }, 1);
  }

  updateItemInStore() {
    this.editing = false;
    if(this.text.invalid) {return;}
    if(this.text.value === this.todo.text) {return;}

    this.store.dispatch(editToDo({id: this.todo.id, text: this.text.value}));
  }

  deleteToDo(){
    this.store.dispatch(deleteToDo({id: this.todo.id}));
  }

}

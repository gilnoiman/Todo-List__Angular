import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Itasks } from '../interfaces/itasks';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks$: Itasks[];
  selectAllBool: Boolean = false;
  newTodo: string;

  constructor(private data: DataService) { }

  // function that delete todo row
  deleteTask = function(task) {
    this.tasks$.splice(task, 1);
  };

  // function that add todo row
  addTask = function(newTaskText: string) {
    if (newTaskText && this.tasks$) {
      const newtask: Itasks = {'id': (this.tasks$.length + 1), 'title': newTaskText, 'complete': false};
      this.tasks$.unshift(newtask);
      this.newTodo = ''; // delete the text inside the textBox
    }
  };

  // function that select all checkbox's and sets the complete property to false
  selectAll = function() {
    if (this.tasks$) {
      if (this.selectAllBool === false) {
        for (let i = 0; i < this.tasks$.length; i++) {
          this.tasks$[i].complete = 'true';
        }
        this.selectAllBool = 'true';
      } else {
        for (let i = 0; i < this.tasks$.length; i++) {
          this.tasks$[i].complete = 'false';
        }
        this.selectAllBool = false;
      }
    }
  };

  // function that changing the 'complete' property when selecting one task checkbox
  selectSingleTask = function(task: number) {
    if (this.tasks$ && task) {
      if (this.tasks$[task].complete === 'false') {
        this.tasks$[task].complete = 'true';
      } else {
        this.tasks$[task].complete = 'false';
      }
    }
  };

  ngOnInit() {
    // gets all previos todo data from the service
    this.data.getTodoListData().subscribe(
      data => this.tasks$ = data
    );
  }

}

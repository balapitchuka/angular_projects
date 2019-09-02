import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  public todo;
  public todoArray = [];

  todoAdd(item){
      this.todoArray.push(item);
      console.log(this.todoArray);
  }

  todoDelete(item) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (item == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
}

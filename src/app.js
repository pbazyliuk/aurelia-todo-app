import { Todo } from "./todo";

export class App {
  constructor() {
    this.heading = "Todos";
    this.todos = [];
    this.todoDescription = "";
  }

  addTodo() {
    console.log(this.todoDescription);
    console.log(this.todos);
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = "";
      console.log(this.todos);
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== 1) this.todos.splice(index, 1);
  }
}

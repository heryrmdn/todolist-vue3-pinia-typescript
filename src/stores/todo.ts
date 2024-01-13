import { defineStore } from 'pinia'

interface Todo {
  id: number,
  value: string,
  completed: boolean,
  isEdit: boolean
}

interface TodoState {
  todos: Todo[];
  todosView: Todo[];
}

const initialState: TodoState = {
  todos: [
    { id: 1, value: "Buy Milk", completed: false, isEdit: false },
    { id: 2, value: "Buy Egg", completed: false, isEdit: false },
    { id: 3, value: "Buy T-Shirt", completed: false, isEdit: false },
  ],
  todosView: []
};

export const useTodoStore = defineStore('todo', {
  state: () => (initialState as TodoState),
  actions: {
    addTodo(todo: string) {
      const newTodo: Todo = {
        id: Date.now(),
        value: todo,
        completed: false,
        isEdit: false
      }

      this.todos.push(newTodo);
    },
    deleteTodo(todoId: number) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
    editStatusTodo(todoId: number) {
      this.todos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed
        }
      })
    },
    editTodo(todoId: number) {
      this.todos.map((todo) => {
        if (todo.id === todoId) {
          todo.isEdit = !todo.isEdit
        }
      })
    },
    getAllTodos() {
      this.todosView = this.todos
    },
    getActiveTodo() {
      this.todosView = this.todos.filter((todo) => !todo.completed)
    },
    getCompletedTodo() {
      this.todosView = this.todos.filter((todo) => todo.completed)
    }
  }
})
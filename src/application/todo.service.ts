import { Injectable } from '@nestjs/common';
import { Todo } from '../domain/todo.entity.js';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) throw new Error('Todo not found');
    return todo;
  }

  addTodo(
    title: string,
    priority: number,
    completed: boolean,
    description?: string,
    dueDate?: string,
  ): Todo {
    const newTodo = new Todo(
      this.todos.length + 1, // ID
      title,                // Title
      priority,             // Priority
      completed,            // Completed
      description || '',    // Description
      dueDate || '',        // Due Date
    );
    this.todos.push(newTodo);
    return newTodo;
  }
  
  
  

  updateTodo(
    id: number,
    title?: string,
    description?: string,
    completed?: boolean,
    dueDate?: string,
    priority?: number,
  ): Todo {
    const todo = this.getTodoById(id);
    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;
    if (dueDate !== undefined) todo.dueDate = dueDate;
    if (priority !== undefined) todo.priority = priority;

    return todo;
  }

  deleteTodo(id: number): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) throw new Error('Todo not found');
    this.todos.splice(index, 1);
    return true;
  }
}

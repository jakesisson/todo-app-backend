import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Todo } from '../domain/todo.entity';
import { TodoService } from '../application/todo.service';
import { GqlAuthGuard } from '../auth/gql-auth.guard'; // Adjust the path based on your structure

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { name: 'getTodos' })
  getTodos(): Todo[] {
    return this.todoService.getAllTodos();
  }

  @Query(() => Todo, { name: 'getTodoById' })
  getTodoById(@Args('id', { type: () => Int }) id: number): Todo {
    return this.todoService.getTodoById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Todo, { name: 'addTodo' })
  addTodo(
    @Args('title') title: string, // Required
    @Args('priority', { type: () => Int, defaultValue: 3 }) priority: number, // Required with default
    @Args('completed', { type: () => Boolean, defaultValue: false }) completed: boolean, // Required with default
    @Args('description', { nullable: true }) description?: string, // Optional
    @Args('dueDate', { nullable: true }) dueDate?: string, // Optional
  ): Todo {
    return this.todoService.addTodo(title, priority, completed, description, dueDate);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Todo, { name: 'updateTodo' })
  updateTodo(
    @Args('id', { type: () => Int }) id: number,
    @Args('title', { nullable: true }) title?: string,
    @Args('description', { nullable: true }) description?: string,
    @Args('completed', { nullable: true }) completed?: boolean,
    @Args('dueDate', { nullable: true }) dueDate?: string,
    @Args('priority', { nullable: true, type: () => Int }) priority?: number,
  ): Todo {
    return this.todoService.updateTodo(id, title, description, completed, dueDate, priority);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean, { name: 'deleteTodo' })
  deleteTodo(@Args('id', { type: () => Int }) id: number): boolean {
    return this.todoService.deleteTodo(id);
  }
}

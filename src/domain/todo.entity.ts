import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

@ObjectType() // GraphQL decorator
export class Todo {
  @Field(() => Number) // GraphQL type decorator
  @IsInt()
  @Min(1)
  public id: number;

  @Field() // Default type is String
  @IsString()
  @IsNotEmpty()
  public title: string;

  @Field({ nullable: true }) // Allows null or undefined
  @IsString()
  @IsOptional()
  public description: string;

  @Field(() => Boolean)
  @IsBoolean()
  public completed: boolean;

  @Field({ nullable: true }) // ISO date string
  @IsString()
  @IsOptional()
  public dueDate?: string;

  @Field(() => Number) // Priority level
  @IsInt()
  @Min(1)
  public priority: number;

  constructor(
    id: number,
    title: string,
    priority: number = 3, // Priority is placed here
    completed: boolean = false,
    description: string = '',
    dueDate: string = '',
  ) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.completed = completed;
    this.description = description;
    this.dueDate = dueDate;
  }
  
  
}

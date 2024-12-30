import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule for environment variables
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module'; // Import AuthModule
import { TodoService } from './application/todo.service';
import { TodoResolver } from './todo/todo.resolver';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration globally available
    }),
    // Configure GraphQL
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // Auto-generate GraphQL schema
      context: ({ req }) => {
        console.log('Incoming Authorization Header:', req.headers.authorization); // Debug log
        return { req }; // Pass the request object to the context for authentication
      },
    }),
    AuthModule, // Import authentication module
  ],
  providers: [TodoService, TodoResolver],
})
export class AppModule {}

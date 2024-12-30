import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): string {
    return this.authService.login(username, password);
  }
}
import { Injectable } from '@nestjs/common';
import * as users from '../users.json';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly secret = process.env.JWT_SECRET || 'defaultSecret';

  login(username: string, password: string): string {
    const user = users.find(
      (user) => user.username === username && user.password === password,
    );
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return sign({ username }, this.secret, { expiresIn: '1h' });
  }
}

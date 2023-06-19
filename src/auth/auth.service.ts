import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  doSomething() {
    console.log('authserrvice do something');
  }
}

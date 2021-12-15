import { Injectable } from '@nestjs/common';

@Injectable()
export class Chapter1Service {
  getHello(): string {
    return 'Hello World!';
  }
}

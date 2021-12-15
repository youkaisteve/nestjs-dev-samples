import { Controller, Get } from '@nestjs/common';
import { Chapter1Service } from './chapter1.service';

@Controller()
export class Chapter1Controller {
  constructor(private readonly chapter1Service: Chapter1Service) {}

  @Get()
  getHello(): string {
    return this.chapter1Service.getHello();
  }
}

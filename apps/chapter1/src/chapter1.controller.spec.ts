import { Test, TestingModule } from '@nestjs/testing';
import { Chapter1Controller } from './chapter1.controller';
import { Chapter1Service } from './chapter1.service';

describe('Chapter1Controller', () => {
  let chapter1Controller: Chapter1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Chapter1Controller],
      providers: [Chapter1Service],
    }).compile();

    chapter1Controller = app.get<Chapter1Controller>(Chapter1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(chapter1Controller.getHello()).toBe('Hello World!');
    });
  });
});

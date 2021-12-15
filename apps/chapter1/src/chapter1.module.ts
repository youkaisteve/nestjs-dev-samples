import { Module } from '@nestjs/common';
import { Chapter1Controller } from './chapter1.controller';
import { Chapter1Service } from './chapter1.service';

@Module({
  imports: [],
  controllers: [Chapter1Controller],
  providers: [Chapter1Service],
})
export class Chapter1Module {}

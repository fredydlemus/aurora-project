import { Injectable } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is a simple NestJS API!!!';
  }

  @Get('greetings')
  anotherGreetings(): string {
    return 'Hello from another greetings';
  }
}

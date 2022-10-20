import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsLibraryService {
  config(): string {
    console.log('hello');
    return 'hello from utils service';
  }
}


import {get} from '@loopback/rest';

export class Sreekar {
  @get('/sreekar')
  hello(): string {
    return 'Hello World';
  }
}
// fix path if necessary
import { AuthorModel } from './author.model';

export interface MessageModel {
  id?: string;
  timestamp?: number;
  text: string;
  author: AuthorModel;
}

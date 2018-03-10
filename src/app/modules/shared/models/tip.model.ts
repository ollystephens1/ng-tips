import { Tag, Author } from './index';

export interface Tip {
  title: string;
  subtitle: string;
  content: string;
  tags?: Tag[];
  author: Author;
}
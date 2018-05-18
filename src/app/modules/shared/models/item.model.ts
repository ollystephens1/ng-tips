import { Tag, Author } from './index';

export class Item {
  title: string;
  subtitle?: string;
  content: string;
  tags?: Tag[];
  author: Author;
  createdAt?: Date;
  updatedAt?: Date;
}

import {Model} from '@gngt/core/model';

export interface Item extends Model {
  project_id: number;
  name: string;
  description?: string;
  order: number;
}

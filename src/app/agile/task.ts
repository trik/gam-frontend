import {Item} from './item';

export interface Task extends Item {
  user_story_id?: number;
}

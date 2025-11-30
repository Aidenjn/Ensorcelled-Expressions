import { CustomIcon } from './CustomIcon';

export enum CategoryFamily {
  AstheticForm = 'AstheticForm',
  FunctionForm = 'FunctionForm',
}

export type Category = {
  title: string;
  descriptor: string;
  slug: string;
  icon: CustomIcon;
  categoryFamily: CategoryFamily;
};

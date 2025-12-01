import { Category, CategoryFamily } from '../types/Category';
import { CustomIcon } from '../types/CustomIcon';

// Each category value's slug needs to match the slug of
// a category object in Sanity, otherwise assumptions elsewhere
// will be violated and category related functionality may break
// (e.g. correct icon may not show per category).

export const ALL_CATEGORIES: Category[] = [
  // *** Function categories (e.g. mugs, pots, etc.) ***
  {
    title: 'Mugs',
    descriptor: 'mug',
    slug: 'mugs',
    icon: CustomIcon.Mug,
    categoryFamily: CategoryFamily.FunctionForm,
  },
  {
    title: 'Pots',
    descriptor: 'pot',
    slug: 'pots',
    icon: CustomIcon.Pot,
    categoryFamily: CategoryFamily.FunctionForm,
  },
  {
    title: 'Soap Dispensers',
    descriptor: 'soap dispenser',
    slug: 'soap-dispensers',
    icon: CustomIcon.Dispenser,
    categoryFamily: CategoryFamily.FunctionForm,
  },
  {
    title: 'Oddities',
    descriptor: 'oddity',
    slug: 'oddities',
    icon: CustomIcon.Oddity,
    categoryFamily: CategoryFamily.FunctionForm,
  },

  // *** Asthetic categories (e.g. dogs, goblins, etc.) ***
  {
    title: 'Goblins',
    descriptor: 'goblin-like',
    slug: 'goblins',
    icon: CustomIcon.Goblin,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Demons',
    descriptor: 'demonic',
    slug: 'demons',
    icon: CustomIcon.Demon,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Birds',
    descriptor: 'birdlike',
    slug: 'birds',
    icon: CustomIcon.Bird,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Gnomes',
    descriptor: 'gnomish',
    slug: 'gnomes',
    icon: CustomIcon.Gnome,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Dogs',
    descriptor: 'canine',
    slug: 'dogs',
    icon: CustomIcon.Dog,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Cats',
    descriptor: 'feline',
    slug: 'cats',
    icon: CustomIcon.Cat,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Triclopes',
    descriptor: 'trioptic',
    slug: 'triclopes',
    icon: CustomIcon.Triclopes,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Aliens',
    descriptor: 'alien',
    slug: 'aliens',
    icon: CustomIcon.Alien,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Snot-Nosed Fellows',
    descriptor: 'boogery',
    slug: 'boogery',
    icon: CustomIcon.Boogery,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Elephants',
    descriptor: 'trunky',
    slug: 'elephants',
    icon: CustomIcon.Elephant,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Cyclopes',
    descriptor: 'monocular',
    slug: 'cyclopes',
    icon: CustomIcon.Cyclops,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Serpents',
    descriptor: 'serpentine',
    slug: 'serpents',
    icon: CustomIcon.Serpent,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Robots',
    descriptor: 'robotic',
    slug: 'robots',
    icon: CustomIcon.Robot,
    categoryFamily: CategoryFamily.AstheticForm,
  },
  {
    title: 'Haints',
    descriptor: 'haunted',
    slug: 'haints',
    icon: CustomIcon.Haunted,
    categoryFamily: CategoryFamily.AstheticForm,
  },
];

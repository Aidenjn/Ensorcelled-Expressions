import SpiralCutGazeIcon from '@/public/custom_graphics/spiral_cut_gaze.svg';
import SleepyIcon from '@/public/custom_graphics/sleep.svg';
import StarryEyesIcon from '@/public/custom_graphics/starry_eyes.svg';
import ExcitedGlaceIcon from '@/public/custom_graphics/excited_gaze_down.svg';
import JoySquintIcon from '@/public/custom_graphics/joy_squint.svg';
import AlienIcon from '@/public/custom_graphics/alien.svg';
import DogIcon from '@/public/custom_graphics/dog.svg';
import ConfusedIcon from '@/public/custom_graphics/confused.svg';
import DemonIcon from '@/public/custom_graphics/demon.svg';
import MugIcon from '@/public/custom_graphics/mug.svg';
import PotIcon from '@/public/custom_graphics/pot.svg';
import DispenserIcon from '@/public/custom_graphics/dispenser.svg';
import ContainerIcon from '@/public/custom_graphics/liddedcontainer.svg';
import OddityIcon from '@/public/custom_graphics/oddity.svg';
import GoblinIcon from '@/public/custom_graphics/goblin.svg';
import GnomeIcon from '@/public/custom_graphics/gnome.svg';
import BirdIcon from '@/public/custom_graphics/bird.svg';
import CatIcon from '@/public/custom_graphics/cat.svg';
import TriclopesIcon from '@/public/custom_graphics/triclopes.svg';

import BoogerFaceIcon from '@/public/custom_graphics/booger.svg';
import CyclopsIcon from '@/public/custom_graphics/cyclopes.svg';
import DisgustedIcon from '@/public/custom_graphics/disgusted.svg';
import ElephantIcon from '@/public/custom_graphics/elephant.svg';
import HauntedIcon from '@/public/custom_graphics/haunted.svg';
import LampIcon from '@/public/custom_graphics/lamp.svg';
import SerpentIcon from '@/public/custom_graphics/reptilian.svg';
import RobotIcon from '@/public/custom_graphics/robot.svg';
import SoapTrayIcon from '@/public/custom_graphics/soap_tray.svg';
import VaseIcon from '@/public/custom_graphics/vase.svg';

import { FC } from 'react';
import { CustomIcon } from '@/lib/types/CustomIcon';

// Will choose this as last resort
const DEFAULT_ICON: FC<React.SVGProps<SVGSVGElement>> = SpiralCutGazeIcon;

// Map enum to SVG components
const ICON_MAP: Record<CustomIcon, FC<React.SVGProps<SVGSVGElement>>> = {
  [CustomIcon.SpiralCutGaze]: SpiralCutGazeIcon,
  [CustomIcon.Sleepy]: SleepyIcon,
  [CustomIcon.StarryEyes]: StarryEyesIcon,
  [CustomIcon.ExcitedGlace]: ExcitedGlaceIcon,
  [CustomIcon.JoySquint]: JoySquintIcon,
  [CustomIcon.Alien]: AlienIcon,
  [CustomIcon.Dog]: DogIcon,
  [CustomIcon.Confused]: ConfusedIcon,
  [CustomIcon.Demon]: DemonIcon,
  [CustomIcon.Mug]: MugIcon,
  [CustomIcon.Pot]: PotIcon,
  [CustomIcon.Dispenser]: DispenserIcon,
  [CustomIcon.Container]: ContainerIcon,
  [CustomIcon.Oddity]: OddityIcon,
  [CustomIcon.Goblin]: GoblinIcon,
  [CustomIcon.Gnome]: GnomeIcon,
  [CustomIcon.Bird]: BirdIcon,
  [CustomIcon.Triclopes]: TriclopesIcon,
  [CustomIcon.Cat]: CatIcon,
  [CustomIcon.Boogery]: BoogerFaceIcon,
  [CustomIcon.Disgusted]: DisgustedIcon,
  [CustomIcon.Cyclops]: CyclopsIcon,
  [CustomIcon.Elephant]: ElephantIcon,
  [CustomIcon.Haunted]: HauntedIcon,
  [CustomIcon.Lamp]: LampIcon,
  [CustomIcon.Serpent]: SerpentIcon,
  [CustomIcon.Robot]: RobotIcon,
  [CustomIcon.SoapTray]: SoapTrayIcon,
  [CustomIcon.Vase]: VaseIcon,
};

const ICONS_ARRAY_FOR_RANDOM_SELECTION: CustomIcon[] = [
  CustomIcon.SpiralCutGaze,
  CustomIcon.Sleepy,
  CustomIcon.StarryEyes,
  CustomIcon.ExcitedGlace,
  CustomIcon.JoySquint,
  CustomIcon.Alien,
  CustomIcon.Dog,
  CustomIcon.Confused,
  CustomIcon.Demon,
  CustomIcon.Gnome,
  CustomIcon.Bird,
  CustomIcon.Triclopes,
  CustomIcon.Cat,
  CustomIcon.Goblin,
  CustomIcon.Boogery,
  CustomIcon.Disgusted,
  CustomIcon.Cyclops,
  CustomIcon.Elephant,
  CustomIcon.Haunted,
  CustomIcon.Serpent,
  CustomIcon.Robot,
];

// Props for generic icon component
interface IconProps {
  icon?: CustomIcon; // optional specific icon
  seed?: string; // optional deterministic seed
  className?: string;
}

const CustomIconSVG: FC<IconProps> = ({
  icon,
  seed = 'an_ensorcercelled_default_seed',
  className,
}) => {
  let IconComponent: FC<React.SVGProps<SVGSVGElement>>;

  if (icon) {
    // Use the specified icon
    IconComponent = ICON_MAP[icon];
  } else {
    // Deterministic random icon based on seed
    const hash = [...seed].reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) >>> 0, 0);
    const randomType: CustomIcon | undefined =
      ICONS_ARRAY_FOR_RANDOM_SELECTION[hash % ICONS_ARRAY_FOR_RANDOM_SELECTION.length];
    IconComponent = randomType ? ICON_MAP[randomType] : DEFAULT_ICON;
  }

  return <IconComponent className={className} />;
};

export default CustomIconSVG;

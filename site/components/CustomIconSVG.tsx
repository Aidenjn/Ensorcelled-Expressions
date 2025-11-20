import SpiralCutGazeIcon from "@/public/custom_graphics/spiral_cut_gaze.svg";
import SleepyIcon from "@/public/custom_graphics/sleep.svg";
import StarryEyesIcon from "@/public/custom_graphics/starry_eyes.svg";
import ExcitedGlaceIcon from "@/public/custom_graphics/excited_gaze_down.svg";
import JoySquintIcon from "@/public/custom_graphics/joy_squint.svg";
import AlienIcon from "@/public/custom_graphics/alien.svg";
import DogIcon from "@/public/custom_graphics/dog.svg";
import ConfusedIcon from "@/public/custom_graphics/confused.svg";
import DemonIcon from "@/public/custom_graphics/demon.svg";
import MugIcon from "@/public/custom_graphics/mug.svg";
import PotIcon from "@/public/custom_graphics/pot.svg";
import DispenserIcon from "@/public/custom_graphics/dispenser.svg";
import { FC } from "react";
import { CustomIcon } from "@/lib/types/CustomIcon";

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
  [CustomIcon.Goblin]: DemonIcon, // TODO: Make unique goblin svg
  [CustomIcon.Oddity]: ConfusedIcon, // TODO: Make unique oddity svg
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
]

// Props for generic icon component
interface IconProps {
  icon?: CustomIcon;   // optional specific icon
  seed?: string;       // optional deterministic seed
  className?: string;
}

const CustomIconSVG: FC<IconProps> = ({
  icon,
  seed,
  className,
}) => {
  let IconComponent: FC<React.SVGProps<SVGSVGElement>>;

  if (icon) {
    // Use the specified icon
    IconComponent = ICON_MAP[icon];
  } else if (seed) {
    // Deterministic random icon based on seed
    const hash = [...seed].reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const randomType = ICONS_ARRAY_FOR_RANDOM_SELECTION[hash % ICONS_ARRAY_FOR_RANDOM_SELECTION.length];
    IconComponent = ICON_MAP[randomType];
  } else {
    // Fully random icon
    const randomType = ICONS_ARRAY_FOR_RANDOM_SELECTION[Math.floor(Math.random() * ICONS_ARRAY_FOR_RANDOM_SELECTION.length)];
    IconComponent = ICON_MAP[randomType];
  }

  return <IconComponent className={className} />;
};

export default CustomIconSVG;
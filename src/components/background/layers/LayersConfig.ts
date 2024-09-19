import { TimeRangeKey } from "../../../store/types";
import imageMap from "./assets/layers/LayerMapping";

export interface LayerConfig {
  image: string;
  sensitivity: number;
}

export const RISING_LAYER_CONFIG: LayerConfig[] = [
  {
    image: imageMap["rising-1.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["rising-2.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["rising-3.png"],
    sensitivity: 0.02,
  },
];

export const MORNING_LAYER_CONFIG: LayerConfig[] = [
  {
    image: imageMap["morning-1.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["morning-2.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["morning-3.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["morning-4.png"],
    sensitivity: 0.02,
  },
];

export const DAY_LAYER_CONFIG: LayerConfig[] = [
  {
    image: imageMap["day-1.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["day-2.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["day-3.png"],
    sensitivity: 0.02,
  },
];

export const SUPERDAY_LAYER_CONFIG: LayerConfig[] = [
  {
    image: imageMap["superday-6.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["superday-1.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["superday-2.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["superday-3.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["superday-5.png"],
    sensitivity: 0.02,
  },
];

export const ALMOSTDUSK_LAYER_CONFIG: LayerConfig[] = [
  {
    image: imageMap["superday-1.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["superday-2.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["superday-3.png"],
    sensitivity: 0.02,
  },
];

export const DUSK_LAYER_CONFIG: LayerConfig[] = [
  {
    image: imageMap["superday-1.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["superday-2.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["superday-3.png"],
    sensitivity: 0.02,
  },
];

export const TWILIGHT_LAYER_CONFIG: LayerConfig[] = [
  {
    image: imageMap["twilight-1.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["twilight-2.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["twilight-3.png"],
    sensitivity: 0.02,
  },
];

export const NIGHT_LAYER_CONFIG: LayerConfig[] = [
  {
    image: imageMap["night-1.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["night-2.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["night-3.png"],
    sensitivity: 0.02,
  },
  {
    image: imageMap["night-4.png"],
    sensitivity: 0.02,
  },
];

export const LAYER_CONFIGS: { [key in TimeRangeKey]: LayerConfig[] } = {
  Dawn: DUSK_LAYER_CONFIG,
  Rising: RISING_LAYER_CONFIG,
  Morning: SUPERDAY_LAYER_CONFIG,
  Day: DAY_LAYER_CONFIG,
  SuperDay: SUPERDAY_LAYER_CONFIG,
  DayAlmostDusk: ALMOSTDUSK_LAYER_CONFIG,
  Dusk: DUSK_LAYER_CONFIG,
  Twilight: TWILIGHT_LAYER_CONFIG,
  Night: TWILIGHT_LAYER_CONFIG,
  DeepNight: NIGHT_LAYER_CONFIG,
  Midnight: NIGHT_LAYER_CONFIG,
  MidnightMidnight: NIGHT_LAYER_CONFIG,
};

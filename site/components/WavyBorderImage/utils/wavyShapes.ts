import { WavyShape, WavyShapeData } from "@/lib/types/WavyShapes";
import { WAVY_SHAPE_DATA } from '@/lib/constants/wavyShapeData';

export function getWavyShapeData(shape: WavyShape): WavyShapeData  {
  return WAVY_SHAPE_DATA[shape];
}
import {
  ILinkPathConstructor,
  ILinkPathConstructorEndpointInfo,
} from '../states/linksSettings';
import { DirectionWithDiagonals } from 'utils/position';
import { distanceBetweenPoints, roundPoint } from 'utils/point';
import { Point } from 'utils/point';

function curvedLinkPathConstructor(
  source: ILinkPathConstructorEndpointInfo,
  target: ILinkPathConstructorEndpointInfo,
  settings: ICurvedLinkPathConstructorSettings
): string {
  if (!source || !target) return '';
  const sourcePoint = roundPoint(source.point);
  const targetPoint = roundPoint(target.point);

  const sourceStr = `${source.point[0]}, ${source.point[1]}`;
  const targetStr = `${target.point[0]}, ${target.point[1]}`;

  const directionFactor = settings.tweakDirectionFactorBasedOnDistance(
    distanceBetweenPoints(sourcePoint, targetPoint),
    settings.directionFactor
  );

  function getControl(
    endpoint: Point,
    direction: DirectionWithDiagonals | undefined
  ): string {
    switch (direction) {
      case 'left':
        return createControl(endpoint[0] - directionFactor, endpoint[1]);
      case 'up':
        return createControl(endpoint[0], endpoint[1] - directionFactor);
      case 'right':
        return createControl(endpoint[0] + directionFactor, endpoint[1]);
      case 'down':
        return createControl(endpoint[0], endpoint[1] + directionFactor);
      case 'left-up':
        return createControl(
          endpoint[0] - directionFactor,
          endpoint[1] - directionFactor
        );
      case 'right-up':
        return createControl(
          endpoint[0] + directionFactor,
          endpoint[1] - directionFactor
        );
      case 'right-down':
        return createControl(
          endpoint[0] + directionFactor,
          endpoint[1] + directionFactor
        );
      case 'left-down':
        return createControl(
          endpoint[0] - directionFactor,
          endpoint[1] + directionFactor
        );
      default:
        return createControl(endpoint[0], endpoint[1]);
    }
  }

  if (source.direction || target.direction) {
    const sourceControl = getControl(sourcePoint, source.direction);
    const targetControl = getControl(targetPoint, target.direction);
    return `M ${sourceStr} C ${sourceControl} ${targetControl} ${targetStr}`;
  } else {
    return `M ${sourceStr} Q ${target.point[0]} ${source.point[1]} ${targetStr}`;
  }
}

export interface ICurvedLinkPathConstructorSettings {
  directionFactor: number;
  tweakDirectionFactorBasedOnDistance: (
    distance: number,
    directionFactor: number
  ) => number;
}

const defualtSettings: ICurvedLinkPathConstructorSettings = {
  directionFactor: 60,
  tweakDirectionFactorBasedOnDistance: (distance, directionFactor) => {
    if (distance < 100) {
      return directionFactor * (distance / 100);
    }
    return directionFactor;
  },
};

export function createCurvedLinkPathConstructor(
  settings?: Partial<ICurvedLinkPathConstructorSettings>
): ILinkPathConstructor {
  return (
    source: ILinkPathConstructorEndpointInfo,
    target: ILinkPathConstructorEndpointInfo
  ) =>
    curvedLinkPathConstructor(
      source,
      target,
      settings ? { ...defualtSettings, ...settings } : defualtSettings
    );
}

function createControl(x: number, y: number) {
  return `${x} ${y}`;
}

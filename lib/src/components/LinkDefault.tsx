import { observer } from 'mobx-react-lite';
import React from 'react';
import { LinkCreationState } from 'states/linkCreationState';
import type { ILinkVisualComponentProps } from 'states/linksSettings';
import type { IComponentDefinition } from 'states/visualComponentState';

export const LinkDefault: React.FC<
  ILinkVisualComponentProps<Partial<ILinkDefaultSettings>>
> = observer(({entity, settings, bind}) => {
  const finalSettings = {
    ...linkDefaultSettings,
    ...settings,
  };
  const path = entity.path;
  if (!path) return null;

  let color = finalSettings.color;
  if (entity.selected) color = finalSettings.selectedColor;

  return (
    <g>
      <path
        d={path.svgPath}
        stroke={color}
        strokeWidth={finalSettings.strokeWidth}
        fill='none'
        strokeLinecap="round"        
      />
      <path
        d={path.svgPath}
        stroke={color}
        strokeWidth={finalSettings.strokeWidth + 5}
        {...bind()}
        pointerEvents='auto'
        fill="none"
        strokeLinecap="round"
        strokeOpacity={entity.hovered ? 0.22 : 0}
      />
      {entity instanceof LinkCreationState && (
        <circle
          cx={path.target[0]}
          cy={path.target[1]}
          r={finalSettings.cirleRadius}
          fill='orange'
        />
      )}
    </g>
  );
});

export interface ILinkDefaultSettings {
  color: string;
  selectedColor: string;
  strokeWidth: number;
  cirleRadius: number;
}

const linkDefaultSettings: ILinkDefaultSettings = {
  color: '#c2c2c2',
  selectedColor: '#6eb7ff',
  strokeWidth: 1,
  cirleRadius: 3,
};

export function createLinkDefault(
  settings?: Partial<ILinkDefaultSettings>
): IComponentDefinition<ILinkVisualComponentProps, Partial<ILinkDefaultSettings>> {
  return {
    component: LinkDefault,
    settings: settings,
  };
}
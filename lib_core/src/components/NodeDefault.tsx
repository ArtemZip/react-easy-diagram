import React from 'react';
import { INodeVisualComponentProps } from '../states/nodesSettings';
import { createPortsContainerDefault } from 'components/PortsContainerDefault';
import type { IPortsContainerDefaultProps } from 'components/PortsContainerDefault';
import { NodeLabel } from './NodeLabel';
import { observer } from 'mobx-react-lite';
import {
  IComponentDefinition,
  VisualComponent,
} from 'states/visualComponentState';
import { NodeState } from 'states/nodeState';
import { Optional } from 'utils/common';
import { IPortProps } from './Port';

export const NodeDefault: React.FC<
  INodeVisualComponentProps<INodeDefaultSettings>
> = observer(({ entity, settings, draggableRef }) => {
  const finalSettings = {
    ...defaultNodeDefaultSettings,
    ...settings,
  };
  const finalStyles = {
    ...finalSettings.style,
    ...(entity.selected ? finalSettings.selectedStyle : undefined),
  };

  return (
    <div
      ref={draggableRef}
      className='react_fast_diagram_Node_Default'
      style={finalStyles}
    >
      <finalSettings.innerNode node={entity} />

      <finalSettings.nodeContainer
        ports={finalSettings.ports.left}
        position='left'
        key='left'
      />
      <finalSettings.nodeContainer
        ports={finalSettings.ports.top}
        position='top'
        key='top'
      />
      <finalSettings.nodeContainer
        ports={finalSettings.ports.right}
        position='right'
        key='right'
      />
      <finalSettings.nodeContainer
        ports={finalSettings.ports.bottom}
        position='bottom'
        key='bottom'
      />
    </div>
  );
});

const defaultNodeDefaultSettings: INodeDefaultFinalSettings = {
  style: {
    padding: '10px',
  },
  selectedStyle: {
    border: '#6eb7ff solid 1px',
  },
  nodeContainer: createPortsContainerDefault(),
  ports: {},
  innerNode: NodeLabel,
};

export interface INodeDefaultFinalSettings {
  style?: React.CSSProperties;
  selectedStyle: React.CSSProperties;
  nodeContainer: VisualComponent<IPortsContainerDefaultProps>;
  ports: {
    left?: IPortProps[];
    top?: IPortProps[];
    right?: IPortProps[];
    bottom?: IPortProps[];
  };
  innerNode: VisualComponent<{ node: NodeState }>;
  padding?: React.CSSProperties['padding'];
}

export function createNodeDefault(
  settings?: INodeDefaultSettings
): IComponentDefinition<
  INodeVisualComponentProps<INodeDefaultSettings>,
  INodeDefaultSettings
> {
  return {
    component: NodeDefault,
    settings: {
      ...defaultNodeDefaultSettings,
      ...settings,
    },
  };
}

type INodeDefaultSettings = Optional<
  INodeDefaultFinalSettings,
  'innerNode' | 'selectedStyle' | 'nodeContainer'
>;

type INodeDefaultSettingsWithoutPorts = Omit<INodeDefaultSettings, 'ports'>;

export const createInputOutputHorizontalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNodeDefault({
    ...settings,
    ports: {
      left: [{ id: 'input' }],
      right: [{ id: 'output' }],
    },
  });

export const createInputOutputVerticalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNodeDefault({
    ...settings,
    ports: {
      top: [{ id: 'input' }],
      bottom: [{ id: 'output' }],
    },
  });

export const createInputHorizontalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNodeDefault({
    ...settings,
    ports: {
      left: [{ id: 'input' }],
    },
  });

export const createInputVerticalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNodeDefault({
    ...settings,
    ports: {
      top: [{ id: 'input' }],
    },
  });

export const createOutputHorizontalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNodeDefault({
    ...settings,
    ports: {
      right: [{ id: 'output' }],
    },
  });

export const createOutputVerticalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNodeDefault({
    ...settings,
    ports: {
      bottom: [{ id: 'output' }],
    },
  });

export const createStarNode = (settings?: INodeDefaultSettingsWithoutPorts) =>
  createNodeDefault({
    ...settings,
    ports: {
      left: [{ id: 'left' }],
      top: [{ id: 'top' }],
      right: [{ id: 'right' }],
      bottom: [{ id: 'bottom' }],
    },
  });

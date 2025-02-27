import React, { useEffect } from 'react';
import {
  createNode,
  createOutputHorizontalNode,
  Diagram,
  disableNodeUserInteractionClassName,
  NodeState,
} from 'react-easy-diagram';
import { observer } from 'mobx-react-lite';
import styles from '../styles.module.css'; 

const NumberProvider = observer<{ node: NodeState }>(({ node }) => {
  const port = node.ports['output'];
  return (
    <>
      <div>Number input</div>
      <span>
        <input
          type='number'
          onChange={(event) =>
            port?.setExtra(parseInt(event.target.value) || 0)
          }
          defaultValue={port && port.extra}
          className={`${styles.textInput} ${disableNodeUserInteractionClassName}`}
        />
      </span>
    </>
  );
});

const Sum = observer<{ node: NodeState }>(({ node }) => {
  const outputPort = node.ports['output'];

  const getInputNumber = (portName: string): number => {
    const port = node.ports[portName];
    if (port && port.connectedPorts.length > 0) {
      return port.connectedPorts[0].extra ?? 0;
    } else return 0;
  };
  const num1 = getInputNumber('number_1');
  const num2 = getInputNumber('number_2');
  const sum = num1 + num2;

  useEffect(() => outputPort?.setExtra(sum), [outputPort, sum]);

  return (
    <>
      <div>Sum: {outputPort ? outputPort.extra : ''}</div>
    </>
  );
});

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'num1',
          position: [100, 100],
          type: 'number',
        },
        {
          id: 'num2',
          position: [100, 300],
          type: 'number',
        },
        {
          id: 'num3',
          position: [420, 250],
          type: 'number',
        },
        {
          id: 'add1',
          position: [420, 150],
          type: 'sum',
        },
        {
          id: 'add2',
          position: [700, 200],
          type: 'sum',
        },
      ],
      links: [
        {
          source: {
            nodeId: 'num1',
            portId: 'output',
          },
          target: {
            nodeId: 'add1',
            portId: 'number_1',
          },
        },
        {
          source: {
            nodeId: 'num2',
            portId: 'output',
          },
          target: {
            nodeId: 'add1',
            portId: 'number_2',
          },
        },
        {
          source: {
            nodeId: 'num3',
            portId: 'output',
          },
          target: {
            nodeId: 'add2',
            portId: 'number_2',
          },
        },
        {
          source: {
            nodeId: 'add1',
            portId: 'output',
          },
          target: {
            nodeId: 'add2',
            portId: 'number_1',
          },
        },
      ],
    }}
    settings={{
      nodes: {
        components: {
          number: createOutputHorizontalNode({
            innerNode: NumberProvider,
          }),
          sum: createNode({
            ports: [
              {
                id: 'number_1',
                type: 'input',
                position: 'left-center',
                offsetFromOrigin: [0, -15],
              },
              {
                id: 'number_2',
                type: 'input',
                position: 'left-center',
                offsetFromOrigin: [0, 15],
              },
              {
                id: 'output',
                type: 'output',
                position: 'right-center',
              },
            ],
            innerNode: Sum,
          }),
        },
      },
      callbacks: {
        validateLinkEndpoints: (source, target, rootStore) => {
          // allow connection only if target port is still unconnected
          if (target.type === 'input' && target.connectedLinks.length > 0) return false;
          if (source.type === 'input' && source.connectedLinks.length > 0) return false;

          if (source.type === 'input' && target.type === 'input') return false;
          if (source.type === 'output' && target.type === 'output') return false;
          
          return true;
        },
      },
    }}
  />
);

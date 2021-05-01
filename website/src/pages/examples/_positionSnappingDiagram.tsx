import React from 'react';
import { Diagram } from '@react-easy-diagram/core';

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'Node 1',
          position: [100, 100],
          componentType: 'output_horizontal'
        },
        {
          id: 'Node 2',
          position: [420, 300],
          componentType: 'input_horizontal'
        },
      ],
      links: [
        {
          source: { nodeId: 'Node 1', portId: 'output' },
          target: { nodeId: 'Node 2', portId: 'input' },
        },
      ],
    }}
    settings={{
      nodes:{
        gridSnap: 35 // or [10, 20] to set x and y snap separately
      }
    }}
  />
);

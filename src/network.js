import React from 'react';
import { Graph } from '@vx/network'

const nodes =
  [{x: 50, y: 20}, {x: 200, y: 300}, {x: 300, y: 40}, {x: 280, y: 403}, {x: 347, y: 456}];

const dataSample = {
  nodes,
  links: [
    {source: nodes[0], target: nodes[1]},
    {source: nodes[1], target: nodes[2]},
    {source: nodes[2], target: nodes[4]},
    {source: nodes[3], target: nodes[2]}
  ]
};

function DefaultNode() {
    return <image xlinkHref="https://veronicafishandoyster.com/wp-content/uploads/2016/02/FB.png" x="-15" y="-10" height="30px" width="30px"/>;
}

export default ({
  width='100%',
  height='100vh'
}) => {
  return <svg width={width} height={height}>
      <rect
        width={width}
        height={height}
        rx={14}
        fill='#272b4d'
      />
      <Graph graph={dataSample} nodeComponent={DefaultNode}/>
    </svg>
}
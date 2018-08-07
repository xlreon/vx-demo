import React from 'react';
import { Group } from '@vx/group';
import { Tree } from '@vx/hierarchy';
import { LinkHorizontal } from '@vx/shape';
import { hierarchy } from '../../Library/Caches/typescript/2.9/node_modules/@types/d3-hierarchy';
import { LinearGradient } from '@vx/gradient';
import Home from '@material-ui/icons/HomeOutlined';
import { IconButton } from '@material-ui/core';

const raw = {
  "name": "T",
  "children": [{ 
    "name": "A",
    "children": [
      { "name": "A1" },
      { "name": "A2" },
      { "name": "A3" },
      { "name": "C",
        "children": [{
          "name": "C1",
        }, {
          "name": "D",
          "children": [{
            "name": "D1"
          },{
            "name": "D2"
          },{
            "name": "D3"
          }]
        }]
      },
    ]},
    { "name": "Z" },
    {
    "name": "B",
    "children": [
      { "name": "B1"},
      { "name": "B2"},
      { "name": "B3"},
    ]},
  ],
};

function Node({ node, events }) {
  const width = 40;
  const height = 20;
  return (
    <Group top={node.x} left={node.y}>
      {node.depth === 0 &&
        // <circle
        //   r={15}
        //   fill="url('#lg')"
        // />
        <image xlinkHref="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" height="30px" width="30px"/>

      }
      {/* {node.depth !== 0 &&
        <g>
        <rect
          height={height}
          width={width}
          y={-height / 2}
          x={-width / 2}
          fill={"#272b4d"}
          stroke={node.children ? "#03c0dc" : "#26deb0"}
          strokeWidth={1}
          strokeDasharray={!node.children ? "2,2" : "0"}
          strokeOpacity={!node.children ? .6 : 1}
          rx={!node.children ? 10 : 0}
          onClick={() => {
            alert(`clicked: ${JSON.stringify(node.data.name)}`)
          }}
        />
        <text
          dy={".33em"}
          fontSize={9}
          fontFamily="Arial"
          textAnchor={"middle"}
          style={{ pointerEvents: "none" }}
          fill={node.depth === 0 ? "#71248e" : node.children ? "white" : "#26deb0"}
        >
          {node.data.name}
        </text>
        </g> */}

        {node.depth !== 0 && node.children && 
          <image xlinkHref="https://cdn0.iconfinder.com/data/icons/mobile-device/512/uppercase-latin-letter-round-p-keyboard-2-512.png" height="30px" width="30px"/>
        }
        {node.depth !== 0 && !node.children && 
          <image xlinkHref="https://cdn0.iconfinder.com/data/icons/mobile-device/512/c-copy-letter-copyright-blue-round-2-512.png" height="30px" width="30px"/>
        }
        <text
          dy={".33em"}
          fontSize={9}
          fontFamily="Arial"
          textAnchor={"middle"}
          style={{ pointerEvents: "none" }}
          fill={node.depth === 0 ? "#ff0000" : node.children ? "white" : "#26deb0"}
        >
          {node.data.name}
        </text>


      
    </Group>
  );
}

function Link({ link }) {
  return (
    <LinkHorizontal
      data={link}
      stroke="#374469"
      strokeWidth="1"
      fill="none"
    />
  );
}

export default ({
  width='100%',
  height='100vh',
  events = false,
  margin = {
    top: 10,
    left: 30,
    right: 40,
    bottom: 80,
  }
}) => {
  const data = hierarchy(raw);
  return (
    <svg width={width} height={height} >
      <LinearGradient id="lg" from="#fd9b93" to="#fe6e9e" />
      <rect
        width={width}
        height={height}
        rx={14}
        fill="#272b4d"
      />
      <Tree
        top={margin.top}
        left={margin.left}
        root={data}
        size={[
          600,
          1000
        ]}
        nodeComponent={Node}
        linkComponent={Link}
      />
    </svg>

    // <svg width="5cm" height="4cm" version="1.1">
    //   <image xlinkHref="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" x="0" y="0" height="50px" width="50px"/>
    // </svg>
  );
}
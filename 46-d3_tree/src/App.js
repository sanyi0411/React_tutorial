import React from 'react';
import './App.css';
import { Tree, treeUtil } from 'react-d3-tree';
 
const myTreeData = [
  {
    name: 'Parent Node',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    nodeSvgShape: {
      shapeProps: {
        fill: 'blue',
      },
    },
    children: [
      {
        name: 'Inner Node',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        nodeSvgShape: {
          shape: 'rect',
          shapeProps: {
            width: 20,
            height: 20,
            x: -10,
            y: -10,
            fill: 'red',
          },
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];

const csvSource = 'https://raw.githubusercontent.com/bkrem/react-d3-tree/master/docs/examples/data/csv-example.csv';

class App extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  
  render() {
    return (
      <div className="App">
        {/* <Tree /> will fill width/height of its container*/}
          <Tree 
            data={myTreeData}
            orientation="vertical" 
            nodeSvgShape={svgSquare}
            translate={{x: 100, y: 100}}
          />
      </div>
    );
  }
}

const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 20,
    height: 20,
    x: -10,
    y: -10,
  }
}

export default App;

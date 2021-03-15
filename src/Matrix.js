import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <div className="cell"><Cell value={val}/></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

const arr = new Array(10).fill('#F00')

Matrix.defaultProps = {
  values: [arr, arr, arr, arr, arr, arr, arr, arr, arr, arr]
}

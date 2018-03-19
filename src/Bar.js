import React, { Component } from "react";
import * as d3 from "d3";

class Bar extends Component {
    // render an appropriately sized rectangle
    render() {
        const { x, y, width, height } = this.props;
        return <rect x={x} y={y} width={width} height={height} />;
    }
}

export default Bar;

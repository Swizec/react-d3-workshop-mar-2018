import React, { Component } from "react";
import * as d3 from "d3";

class Bar extends Component {
    state = {
        selected: false
    };
    mouseOver = () => {
        this.setState({
            selected: true
        });
    };

    mouseOut = () => {
        this.setState({
            selected: false
        });
    };

    // render an appropriately sized rectangle
    render() {
        const { x, y, width, height, tag, color } = this.props;
        const { selected } = this.state;
        return (
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{ fill: selected ? color(tag).saturate(2) : color(tag) }}
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
            />
        );
    }
}

export default Bar;

import React, { Component } from "react";
import * as d3 from "d3";

class Bar extends Component {
    mouseOver = () => {
        this.props.selectTag(this.props.tag);
    };

    mouseOut = () => {
        this.props.selectTag(null);
    };

    // render an appropriately sized rectangle
    render() {
        const { x, y, width, height, tag, color, selected } = this.props;

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

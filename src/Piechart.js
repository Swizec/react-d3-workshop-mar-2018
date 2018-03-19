import React, { Component } from "react";
import * as d3 from "d3";

import { groupByFunc } from "./util";
import Arc from "./Arc";

class Piechart extends Component {
    pie = d3
        .pie()
        .value(d => d.amount)
        .sortValues(d => d.tag)
        .padAngle(0.005);

    // set up a pie generator
    render() {
        const {
            data,
            groupBy,
            x,
            y,
            color,
            selectTag,
            selectedTag
        } = this.props;

        const _data = groupByFunc(data, groupBy);

        // data for each arc, from this.pie(_data).map(....
        // render arcs in a loop
        return (
            <g transform={`translate(${x}, ${y})`}>
                {this.pie(_data).map(d => (
                    <Arc
                        d={d}
                        key={d.data.tag}
                        color={color(d.data.tag)}
                        selectTag={selectTag}
                        selected={selectedTag === d.tag}
                    />
                ))}
            </g>
        );
    }
}

export default Piechart;

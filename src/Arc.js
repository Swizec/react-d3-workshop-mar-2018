import React, { Component } from "react";
import * as d3 from "d3";

// inspired from http://bl.ocks.org/mbostock/5100636
function arcTween(oldData, newData, arc) {
    const copy = { ...oldData };
    return function() {
        const interpolateStartAngle = d3.interpolate(
                oldData.startAngle,
                newData.startAngle
            ),
            interpolateEndAngle = d3.interpolate(
                oldData.endAngle,
                newData.endAngle
            );

        return function(t) {
            copy.startAngle = interpolateStartAngle(t);
            copy.endAngle = interpolateEndAngle(t);
            return arc(copy);
        };
    };
}

class Arc extends Component {
    arc = d3
        .arc()
        .innerRadius(80)
        .outerRadius(150)
        .cornerRadius(8);

    // make an arc, render it
    // d3.arc is your friend

    render() {
        const { d, color, selected } = this.props;

        // render a <path>
        // d={} <-- feed datapoint into this.arc()
        return (
            <path
                d={this.arc(d)}
                style={{ fill: selected ? color.saturate(2) : color }}
            />
        );
    }
}

export default Arc;

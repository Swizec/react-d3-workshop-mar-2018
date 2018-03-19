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
        return null;
    }
}

export default Piechart;

import React, { Component } from "react";
import * as d3 from "d3";

import { groupByFunc } from "./util";
import Arc from "./Arc";

class Piechart extends Component {
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

        // render arcs in a loop
        return null;
    }
}

export default Piechart;

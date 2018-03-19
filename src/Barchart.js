import React, { Component } from "react";
import * as d3 from "d3";

import { groupByFunc } from "./util";
import Bar from "./Bar";

class Barchart extends Component {
    // set up scales

    // keep D3 things updated

    render() {
        const {
            x,
            y,
            data,
            groupBy,
            color,
            selectedTag,
            selectTag
        } = this.props;

        const _data = groupByFunc(data, groupBy);

        // render bars in a loop

        return null;
    }
}

export default Barchart;

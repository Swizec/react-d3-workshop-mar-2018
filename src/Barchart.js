import React, { Component } from "react";
import * as d3 from "d3";

import { groupByFunc } from "./util";
import Bar from "./Bar";

class Barchart extends Component {
    // set up scales
    xScale = d3.scaleBand().paddingInner(0.1);
    yScale = d3.scaleLinear();

    // keep D3 things updated
    componentWillMount() {
        this.updateD3(this.props);
    }

    componentWillUpdate(props) {
        this.updateD3(props);
    }

    updateD3(props) {
        const { data, groupBy } = props;
        const _data = groupByFunc(data, groupBy);

        this.xScale.domain(_data.map(d => d.tag)).range([0, props.width]);
        this.yScale
            .domain([0, d3.max(_data, d => d.amount)])
            .range([0, props.height]);
    }

    render() {
        const {
            x,
            y,
            data,
            groupBy,
            color,
            selectedTag,
            selectTag,
            height
        } = this.props;

        const _data = groupByFunc(data, groupBy);

        return (
            <g transform={`translate(${x}, ${y})`}>
                {_data.map(d => (
                    <Bar
                        x={this.xScale(d.tag)}
                        y={height - this.yScale(d.amount)}
                        width={this.xScale.bandwidth()}
                        height={this.yScale(d.amount)}
                        key={d.tag}
                    />
                ))}
            </g>
        );
    }
}

export default Barchart;

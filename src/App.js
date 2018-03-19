import React, { Component } from "react";
import { csv as d3Csv } from "d3-fetch";
import { scaleOrdinal } from "d3";
import * as chroma from "chroma-js";
import _ from "lodash";

import logo from "./logo.svg";
import "./App.css";
import { groupByFunc } from "./util";

import Piechart from "./Piechart";
import Barchart from "./Barchart";

class App extends Component {
    state = {
        data: [],
        cachedData: [],
        selectedTag: null
    };
    colorScale = chroma.scale("PuBu");
    colorIndex = scaleOrdinal();

    componentDidMount() {
        d3Csv("transport.csv").then(data => {
            const cachedData = data.map(d => ({
                ...d,
                amount: Number(d["In main currency"].replace(",", ""))
            }));

            const tags = Object.keys(
                groupByFunc(cachedData, d => d.Tags.split(", ").sort())
            );

            this.colorScale.colors(tags);
            this.colorIndex
                .domain(tags)
                .range(tags.map((_, i) => i / tags.length));

            this.setState({
                cachedData,
                cacheIndex: 0
            });
        });
    }

    startTrickle() {
        // fill data out of cachedData
    }

    componentWillUnmount() {
        // stop timer
    }

    stop() {
        // stop timer
    }

    color(tag) {
        return this.colorScale(this.colorIndex(tag));
    }

    // selectTag function

    render() {
        let { data, selectedTag, cachedData } = this.state;

        // add svg element
        // render Barchart
        // give cachedData to Barchart as data={cachedData}
        // implement barchart internals with <rect> for each datapoint

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">A pie chart with transitions</h1>
                </header>
                <h3>{selectedTag || "<hover something>"}</h3>
                <p className="App-intro">
                    <svg width="800" height="600">
                        <Barchart
                            x={300}
                            y={100}
                            width={400}
                            height={300}
                            data={cachedData}
                            color={tag => this.color(tag)}
                            groupBy={d => d.Tags.split(", ").sort()}
                        />
                    </svg>
                </p>
            </div>
        );
    }
}

export default App;

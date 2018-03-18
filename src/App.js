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
        // load & parse data
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
        // helper to get color for a tag
    }

    // selectTag function

    render() {
        let { data, selectedTag, cachedData } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">A pie chart with transitions</h1>
                </header>
                <h3>{selectedTag || "<hover something>"}</h3>
                <p className="App-intro">{/* put dataviz here */}</p>
            </div>
        );
    }
}

export default App;

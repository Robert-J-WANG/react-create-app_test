import React, { Component } from "react";
import Hello from "./components/Hello";
import Well from "./components/Well";
import Com from "./components/Com";
import Test from "./components/Test";

export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Well />
                <Com />
                <Test/>
            </div>
        )
    }
}
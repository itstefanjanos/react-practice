import React, {Component} from "react";

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}
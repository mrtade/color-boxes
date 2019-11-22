import React, { Component } from "react";
import { indexSelector, colorSelected } from "./misc";

class colorBox extends Component {
  state = {
    color: colorSelected(indexSelector(this.props.colors))
  };

  randomColorPicker = () => {
    let newColor;
    do {
      newColor = colorSelected(indexSelector(this.props.colors));
    } while (newColor === this.state.color);
    this.setState({
      color: newColor
    });
  };

  clickHandler = e => {
    this.randomColorPicker();
  };

  mouseOverHandler = e => {
    this.randomColorPicker();
  };

  render() {
    let boxStyle = {
      width: "5rem",
      height: "5rem",
      backgroundColor: this.state.color
    };

    return (
      <div
        style={boxStyle}
        onClick={this.clickHandler}
        onMouseOver={this.mouseOverHandler}
      />
    );
  }
}

export default colorBox;

import React, { Component } from "react";
import "./App.css";
import "./components/BoxConatiner.css";
import Box from "./components/Box";

class App extends Component {
  static defaultProps = {
    boxCount: 48,
    colorArray: [
      { color: "lavender", id: "0" },
      { color: "thistle", id: "1" },
      { color: "plum", id: "2" },
      { color: "violet", id: "3" },
      { color: "orchid", id: "4" },
      { color: "fuchsia", id: "5" },
      { color: "magenta", id: "6" },
      { color: "mediumorchid", id: "7" },
      { color: "mediumpurple", id: "8" },
      { color: "blueviolet", id: "9" },
      { color: "darkviolet", id: "10" },
      { color: "darkorchid", id: "11" },
      { color: "darkmagenta", id: "12" },
      { color: "purple", id: "13" },
      { color: "indigo", id: "14" },
      { color: "lightcyan", id: "15" },
      { color: "cyan", id: "16" },
      { color: "aqua", id: "17" },
      { color: "aquamarine", id: "18" },
      { color: "mediumaquamarine", id: "19" },
      { color: "paleturquoise", id: "20" },
      { color: "turquoise", id: "21" },
      { color: "mediumturquoise", id: "22" },
      { color: "darkturquoise", id: "23" },
      { color: "lightseagreen", id: "24" },
      { color: "cadetblue", id: "25" },
      { color: "darkcyan", id: "26" },
      { color: "teal", id: "27" },
      { color: "pink", id: "28" },
      { color: "lightpink", id: "29" },
      { color: "hotpink", id: "30" },
      { color: "deeppink", id: "31" },
      { color: "palevioletred", id: "32" },
      { color: "mediumvioletred", id: "33" },
      { color: "lightblue", id: "34" },
      { color: "lightskyblue", id: "35" },
      { color: "skyblue", id: "36" },
      { color: "deepskyblue", id: "37" },
      { color: "lightsteelblue", id: "38" }
    ]
  };

  render() {
    const boxes = Array.from({
      length: this.props.boxCount
    }).map((result, index) => (
      <Box colors={this.props.colorArray} key={index} />
    ));

    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default App;

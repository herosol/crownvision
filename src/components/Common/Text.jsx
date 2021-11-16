import React, { Component } from "react";
import * as helpers from "../../utils/Helpers";

export default class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { string, length, parse } = this.props;
    string = string.trim();
    length = length ?? false;
    parse = parse ?? false;

    if (length)
      if (string.length > length) string = string.slice(0, length) + "...";

    if (parse) string = helpers.doParseHTML(string);

    return <div>{string}</div>;
  }
}

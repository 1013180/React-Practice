import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: props.color, // 中括弧で囲む
    fontSize: "18px"
  };
  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMessage;

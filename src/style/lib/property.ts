import * as propsLib from "@tenoxui/property";

const cssVariableProps = {
  rotate: "--rotate",
  "text-opacity": "--text-opa",
  "bg-opacity": "--bg-opa"
};

const regProps = {
  txf: "color"
};

const customValueProsp = {
  transform: {
    property: "transform",
    value: "rotate(var(--rotate))"
  },
  bgo: {
    property: "backgroundColor",
    value: "blue"
  },
  center: {
    property: ["alignItems", "justifyContent"],
    value: "center"
  }
};

export const property = [propsLib.default, { ...cssVariableProps, ...regProps, ...customValueProsp }];

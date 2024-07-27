import { colors } from "./color";
import { useColor } from "@/utils/useColor";

export const classNames = {
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

export const classUtils = {
  color: useColor(colors, "text"),
  backgroundColor: useColor(colors, "bg"),
  display: {
    flex: "flex",
    block: "block"
  },
  position: {
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed"
  },
  justifyContent: {
    space: "space-between"
  }
};

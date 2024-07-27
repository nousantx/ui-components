import { useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import { property } from "./lib/property";
import { values } from "./lib/value";
import { classNames, classUtils } from "./lib/classes";

export const styler = () => {
  useLayoutEffect(() => {
    use({
      property,
      values,
      classes: { ...classNames, ...classUtils }
    });

    makeStyles({
      body: "bg-darker",
      ".center": "d-flex flex-parent-center"
    });

    tenoxui();
  }, []);
};

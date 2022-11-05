import React from "react";
import WaveDivider from "./dividers/drawing-divider";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "90vh",
  },
  sub_container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: (props) => (props.color ? props.color : "#f1f1f1"),
  },
});

const wavebox = (props) => {
  const {
    children,
    color,
    outline,
    className,
    style,
    subStyle,
    subClassName,
    id,
    top = true,
    bottom = true,
  } = props;
  const classes = useStyles(props);
  const box_color = color ? color : "#f1f1f1";
  let topComp = top ? (
    <WaveDivider color={box_color} outline={outline} />
  ) : null;
  let bottomComp = bottom ? (
    <WaveDivider color={box_color} outline={outline} invert />
  ) : null;

  return (
    <div id={id} className={`${classes.container} ${className}`} style={style}>
      {topComp}
      <div
        className={`${classes.sub_container} ${subClassName}`}
        style={subStyle}
      >
        {" "}
        {children}
      </div>
      {bottomComp}
    </div>
  );
};

export default wavebox;

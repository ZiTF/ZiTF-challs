import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  invertedWave: {
    webkitTransform: "matrix(1,0,0,-1,0,0)",
    transform: "matrix(1,0,0,-1,0,0)",
  },
  normal: {
    display: "block",
  },
}));

const waveDivider = ({ color, style, invert }) => {
  const classes = useStyles();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 100"
      style={{ ...style }}
      className={`${classes.normal} ${invert ? classes.invertedWave : null}`}
    >
      <path
        fill={color ? color : "#f6f6f6"}
        d="M826.337 25.54c-155.367 33.116-222.64 43.247-378.535 9.604C293.342 1.811 137.334 1.811 0 1.811V150h1920V1.811c-180.465-18.496-240.136 71.35-530.217 35.675C1099.7 1.811 981.705-7.577 826.337 25.54z"
      ></path>
    </svg>
  );
};

export default waveDivider;

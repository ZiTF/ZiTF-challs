import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "80vh",
  },
});

const box = (props) => {
  const { children, className, style, id } = props;
  const classes = useStyles(props);

  return (
    <div id={id} className={`${classes.container} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default box;

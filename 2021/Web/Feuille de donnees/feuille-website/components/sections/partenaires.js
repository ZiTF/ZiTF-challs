import React from "react";
import { makeStyles } from "@material-ui/styles";

const data = [
  "/images/partenaires/./zitf.svg",
  "/images/partenaires/./isima.svg",
  "/images/partenaires/./uca.svg",
];

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignContent: "center",
  },
}));

const partenaires = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Nos partenaires</h1>
      <div className={classes.container}>
        {data.map((item, index) => (
          <img src={item} key={item + index} width={150} height={100} />
        ))}
      </div>
    </>
  );
};

export default partenaires;

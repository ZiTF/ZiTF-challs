import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTransition, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core/";

import NavigationItems from "./navigationItems";
import links_data from "../../data/links";

const useStyles = makeStyles((theme) => ({
  toolbarTitle: {
    display: "flex",
    flexDirection: "row",
    "& img": {
      marginRight: "1em",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  header: {
    flex: "0 1 auto",
    padding: "10px",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    borderBottom: "1px solid #eaeaea",
    "& h2": {
      padding: 0,
      margin: 0,
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    flex: "1 1 auto",
    margin: "0",
  },
  foot: {
    width: "100%",
    height: "100%",
    margin: "0",
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function layout({ children, home }) {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <div className={classes.toolbarTitle}>
          {home ? null : (
            <Avatar
              style={{ display: "block", marginRight: "10px" }}
              src="/images/logo.jpg"
            />
          )}

          <Link href="/" passHref>
            <TitleBar />
          </Link>
        </div>
        <NavigationItems links={links_data.links} />
      </header>
      <main className={classes.mainContainer}>{children}</main>

      <footer className={classes.foot}>
        <div style={{ padding: "1em" , textAlign: "center"}}>
          Website made by <a href="https://github.com/Babidiii">@Babidiii</a><br/>
          AKA the monkey web developer of Zitf 2021
        </div>
      </footer>
    </>
  );
}

const TitleBar = React.forwardRef(() => {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    config: { duration: 1000 },
  });

  useEffect(() => {
    const t = setInterval(() => set((state) => !state), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ height: "auto", display: "flex", alignItems: "center" }}>
      {transitions((props, item) =>
        item ? (
          <animated.h2 style={{ ...props, textAlign: "center" }}>
            RmV1aWxsZQ==
          </animated.h2>
        ) : (
          <animated.h2 style={props}>Feuille</animated.h2>
        )
      )}
    </div>
  );
});

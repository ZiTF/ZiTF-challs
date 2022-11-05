import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  NavigationItems: {
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    listStyle: "none",
    "& li": {
      margin: "10px",
    },
    "& a": {
      color: "inherit",
    },
  },
}));

export default function navigationItems({ links }) {
  const styles = useStyles();
  return (
    <ul className={styles.NavigationItems}>
      {links.map((i) => (
        <li key={i.name}>
          <Link href={i.href}>
            <a>{i.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

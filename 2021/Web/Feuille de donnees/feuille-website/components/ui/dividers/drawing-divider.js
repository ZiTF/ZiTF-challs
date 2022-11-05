import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  invertedWave: {
    webkitTransform: "matrix(1,0,0,-1,0,0)",
    transform: "matrix(1,0,0,-1,0,0)",
  },
  normal: {
    display: "block",
  },
}));

function Icon({ color, outline, style, invert }) {
  const classes = useStyles();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 283.5 27.8"
      style={{ ...style, width: "100%", height: 250 }}
      className={`${classes.normal} ${invert ? null : classes.invertedWave}`}
    >
      <path
        fill={color}
        d="M283.5 9.7s-7.3 4.3-14 4.6c-6.8.3-12.6 0-20.9-1.5-11.3-2-33.1-10.1-44.7-5.7s-12.1 4.6-18 7.4c-6.6 3.2-20 9.6-36.6 9.3-17.7-.3-49.8-16.6-63-15.8-1.4.1-6.6.8-10.5 2-3.8 1.2-9.4 3.8-17 4.7-3.2.4-8.3 1.1-14.2.9-1.5-.1-6.3-.4-12-1.6-5.7-1.2-11-3.1-15.8-3.7C6.5 9.2 0 10.8 0 10.8V0h283.5v9.7zm-22.7 1.6c-.7-1-2-.4-4.3-.4s-6.1-1.2-5.8-1.1c.3.1 3.1 1.5 6 1.9 3 .5 4.7.6 4.1-.4zm-18.4-2.7s-2.4-.2-5.6-.9c-3.2-.8-10.3-2.8-15.1-3.5-8.2-1.1-15.8 0-15.1.1.8.1 9.6-.6 17.6 1.1 3.3.7 9.3 2.2 12.4 2.7 3.3.6 5.8.5 5.8.5zm-57.2-.1c1.7-.7-13.3 4.7-18.5 6.1-2.1.6-6.2 1.6-10 2-3.9.4-8.9.4-8.8.5 0 .2 5.8.8 11.2 0 5.4-.8 5.2-1.1 7.6-1.6 3.8-.8 16.8-6.3 18.5-7zm13.9-1.6c.2 0-.8-.4-4.8 1.1s-6.7 3.5-6.9 3.7c-.2.1 3.5-1.8 6.6-3 3-1.2 5-1.8 5.1-1.8zM283 6c-.1.1-1.9 1.1-4.8 2.5s-6.9 2.8-6.7 2.7c.2 0 3.5-.6 7.4-2.5 3.9-1.9 4.2-2.8 4.1-2.7zM31.3 11.6c.1-.2-1.9-.2-4.5-1.2s-5.4-1.6-7.8-2c-4-.8-11.7.1-11.3.2.3.1 8.2-.3 12.5.7 2.2.5 2.4.5 5.7 1.6s5.3 1 5.4.7zM73 9.2c.4-.1 3.5-1.6 8.4-2.6 4.9-1.1 8.9-.5 8.9-.8 0-.3-1-.9-6.2-.3S72.6 9.3 73 9.2zm-1.4-2.5c.2.1 3.4-1.3 5.7-1.7 2.3-.3 1.9-.5 1.9-.6 0-.1-1.1-.2-2.7.2-1.7.5-5.1 2-4.9 2.1zm22-2.3c.1.2 3.5.8 5.6 1.8 2.1 1 1.8.6 1.9.5.1-.1-.8-.8-2.4-1.3-1.6-.6-5.2-1.2-5.1-1zm-28.2 6.7c-.1.3.3.5 1.9-.2s2.6-1.3 2.2-1.2-.9.4-2.5.8c-1.7.4-1.5.3-1.6.6zm-30.9 1.3c-.2 0 2.1.8 3.3.9 1.2.1 2 .1 2-.2 0-.3-.1-.5-1.6-.4-1.6.1-3.5-.3-3.7-.3zm117.7 8.7c-.1.1-2.4-.3-7.5-.3-5 0-13.6-2.4-17.2-3.5-3.6-1.1 10 3.9 16.5 4.1 6.5.2 8.3-.4 8.2-.3z"
        className="tt-shape-fill"
      ></path>
      <path
        fill={outline}
        d="M269.6 18c-.1-.1-4.6.3-7.2 0-7.3-.7-17-3.2-16.6-2.9.4.3 13.7 3.1 17 3.3 4.9.4 6.9-.4 6.8-.4zM227.4 9.8c-.2-.1-4.5-1-9.5-1.2-5-.2-12.7.6-12.3.5.3-.1 5.9-1.8 13.3-1.2s8.7 2 8.5 1.9zM204.5 13.4c-.1-.1 2-1 3.2-1.1 1.2-.1 2 0 2 .3s-.1.5-1.6.4c-1.7-.1-3.5.5-3.6.4zM201 10.6c0-.1-4.4 1.2-6.3 2.2-1.9.9-6.2 3.1-6.1 3.1.1.1 4.2-1.6 6.3-2.6s6.1-2.6 6.1-2.7zM154.5 26.7c-.1-.1-4.6.3-7.2 0-7.3-.7-17-3.2-16.6-2.9.4.3 13.7 3.1 17 3.3 4.9.4 6.9-.3 6.8-.4zM41.9 19.3s1.2-.3 2.9-.1c1.7.2 5.8.9 8.2.7 4.2-.4 7.4-2.7 7-2.6-.4 0-4.3 2.2-8.6 1.9-1.8-.1-5.1-.5-6.7-.4s-2.8.5-2.8.5zM75.5 12.6c.2.1 2-.8 4.3-1.1 2.3-.2 2.1-.3 2.1-.5 0-.1-1.8-.4-3.4 0-1.6.5-3.2 1.5-3 1.6zM15.6 13.2c0-.1 4.3 0 6.7.5 2.4.5 5 1.9 5 2 0 .1-2.7-.8-5.1-1.4-2.3-.6-6.5-1-6.6-1.1z"
        className="tt-shape-fill"
      ></path>
    </svg>
  );
}

export default Icon;
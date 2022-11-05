import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Zoom } from "react-awesome-reveal";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  zoom_container: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "80px",
  },
  paragraph: {
    width: "40%",
    textAlign: "center",
  },
  button: {
    marginTop: "2em",
    borderRadius: 9999,
    fontSize: "2em",
  },
}));

const about = () => {
  const classes = useStyles();
  return (
    <Zoom triggerOnce cascade damping={0.4} className={classes.zoom_container}>
      <img
      src={`/images/leaves/leaf${Math.floor(Math.random() * 8 + 1)}.webp`}
        className={classes.image}
      />
        <img src="/images/feuille3.png" />
      <h2>ベスト・ジュニア・エンタープライズ</h2>
      <p className={classes.paragraph}>
        Etiam molestie eros neque, eget ultricies elit hendrerit commodo. Aenean
        erat libero, ullamcorper tincidunt purus vel, mollis volutpat odio.
        Aenean mollis orci sit amet nunc egestas, a ultrices sapien fermentum.
        Nulla sodales arcu eu sem malesuada, ut molestie arcu ultrices.
        Phasellus convallis urna nisl, id luctus metus euismod eu. Nullam non
        facilisis erat, eu posuere neque. Donec id neque eget magna vestibulum
        lacinia non eu risus. Proin est ante, placerat non posuere sit amet,
        rhoncus eu nulla. Curabitur eget erat leo. Donec non porttitor felis, ut
        euismod est.
      </p>
      <Button href="#services" className={classes.button}>
        ▼
      </Button>
    </Zoom>
  );
};

export default about;

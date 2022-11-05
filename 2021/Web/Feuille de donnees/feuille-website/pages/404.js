import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Zoom, Fade} from "react-awesome-reveal";

const useStyles = makeStyles(() => ({
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"100vh",
    flexDirection:"column",
  },
  subcontainer:{
    justifySelf:"flex-end",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  letter: {
    fontSize: "10em",
    fontWeight:"bold"
  }
}))

const NotFoundPage =() =>{
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <Fade style={{display:"flex",justifyContent:"center"}}>
        <img width="20%" src="/images/404/tree.png" />
      </Fade>
      <Zoom duration={200} triggerOnce>
        <Button variant="outlined" href="/" >Go home</Button>
      </Zoom>
    <div className={classes.subcontainer} >
      <Zoom delay={300}  cascade duration={200} triggerOnce>
        <span className={classes.letter}>4</span>
        <span className={classes.letter}>0</span>
        <span className={classes.letter}>4</span>
      </Zoom>
    </div>
    </div>
  );
}

export default NotFoundPage;

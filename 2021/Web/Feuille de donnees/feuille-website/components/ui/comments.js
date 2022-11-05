import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import CircularProgress from '@material-ui/core/CircularProgress';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyle = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    borderRadius: 7,
    width: "100%",
  },
  image: {
    width: "25ch",
    height: "25ch",
    margin: "0 1em",
    borderRadius: "50em",
  },
  carousel: {
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "50em",
    width: "45%",
    maxWidth: "45%",
  },
  root: {
    textAlign: "center",
    padding:"0 2em" 
  },
}));

function Comments({ comments }) {
  const classes = useStyle();
  const [img, setImg] = useState(comments ? comments[0].url : null);

  return (
    <div className={classes.container}>
      {
        img ?  <img className={classes.image} src={img} />
        : <Skeleton variant="circle" className={classes.image} />
      }
      <Carousel
        navButtonsWrapperProps={{
          style: {
            bottom: "0",
            top: "unset",
          },
        }}
      onChange={(next) => setImg((state) => comments ? comments[next].url : null)}
        className={classes.carousel}
        fullHeightHover={true} 
      >
        {
          comments ? comments.map((item, i) => ( <Item key={i} data={item} />)) : ( <FakeItem />)
        }
      </Carousel>
    </div>
  );
}

function Item(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <p style={{  overflowWrap: "break-word"}} >{props.data.comment}</p>
      <div style={{display: "flex", justifyContent: "center" }}>
        <p>{props.data.name} <span style={{fontWeight:"bold"}} >{props.data.role}</span> </p>
      </div>
    </div>
  );
}

function FakeItem() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
        <CircularProgress color="primary" /> 
    </div>
  );
}
export default Comments;

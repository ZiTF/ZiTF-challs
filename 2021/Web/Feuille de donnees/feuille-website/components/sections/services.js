import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyle = makeStyles((theme) => ({
  root: {
    borderRadius: 7,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    maxWidth: "20%",
    minWidth: "20%",
    minHeight: 250,
    textAlign: "center",
    height: "min-content",
  },
  typo: {
    fontWeight: "bolder",
  },
  divider: {
  },
  service_box:{
      width: "70%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
  },
}));

export default function Service(props) {
  const classes = useStyle();
  return (
    <>
          <h1> Services </h1>
          <div className={classes.service_box} >
            { 
              props.data ? 
                (props.data.map((item) => <ServiceCard key={item.id} data={item} />))
              : Array(8).fill().map((_item, ind) => (<FakeServiceCard key={ind} />))
           }
          </div>
    </>
  );
}


function ServiceCard(props) {
  const classes = useStyle();
  const { title, logo, description } = props.data;

  return (
    <Paper
      className={classes.root}
      style={{ background: "transparent" }}
      elevation={0}
    >
      <div style={{ height: "auto" }}>
        <img src={logo} height="80ch" className={classes.image} />
      </div>
      <Divider className={classes.divider} light />
      <Typography className={classes.typo} variant="h6" component="h4">
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Paper>
  );
}



function FakeServiceCard() {
  const classes = useStyle();

  return (
    <Skeleton  className={classes.root} style={{ height:"200px" }} >
    </Skeleton>
  );
}

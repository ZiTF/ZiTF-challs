import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyle = makeStyles((theme) => ({
  root: {
    borderRadius: 7,
    margin: theme.spacing(1),
    minWidth: 200,
    textAlign: "center",
    height: "min-content",
  },
  title: {
    fontWeight: "bolder",
  },
  divider: {
    margin: `${theme.spacing(1)}px 0`,
  },
}));

export default function WriteupCard(props) {
  const classes = useStyle();
  const { title, autor, text } = props.data;

  return (
    <Card className={classes.root} variant="elevation">
      <CardActionArea>
        <CardContent style={{ paddingBottom: 0 }}>
          <Typography className={classes.title} color="textSecondary">
            {text}
          </Typography>
          <Divider className={classes.divider} light />
          <Typography className={classes.title} variant="h6" component="h3">
            {title}
          </Typography>
          <Typography className={classes.title} variant="h6" component="p">
            {autor}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

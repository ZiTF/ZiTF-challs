import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Skeleton from '@material-ui/lab/Skeleton';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(() => ({
  image_container: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "center",
  },
  image: {
    borderRadius: "50em",
  },
  image_element: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0.7em",
  },
  text: {
    margin: "0.5em 0 0 0",
    fontWeight: "bold",
  },
  chip: {
    margin: "0 0.3em"
  },
  chip_container: {
    margin: "1.5em 0"
  }
}));


// TODO: Change filtering by role for front end side filtering instead of api call.
const equipe = ({members, onClick}) => {
  const classes = useStyles();

  const handleRoleFiltering = (item) => {
    if (selection.includes(item)) setSelection(selection.filter(i => i !== item ));
    else setSelection([...selection, item]);
  }

  const rolesFilters = members !== null ? members.map(i => i.role).reduce((unique, item) =>
    unique.includes(item) ? unique: [...unique, item]
  , []) : null;

  const [selection, setSelection ] = useState([])
  return (
    <>
      <h1 id="team"> Notre équipe </h1>
    <div className={classes.chip_container} >
      { !selection.length && <Chip label="All" color="secondary" /> }
      { rolesFilters !== null ? rolesFilters.map(( item, index ) =>  
        <Chip className={classes.chip} label={item} key={index} onClick={ () => handleRoleFiltering(item) } variant="outlined" color={selection.includes(item) ? "primary" : "secondary"}/>)
        : null
      }

    </div>
      <div className={classes.image_container}>
        { 
          members === null ? 
          Array(15).fill().map( ( _, index) => <FakeMember key={index}/> ) 
          : members.filter((m) => !selection.length ? true : selection.includes(m.role) ).map((item) => <Member onClick={onClick} item={item} key={ item.id }/> )
        }
      </div>
    </>
  );
};

export default equipe;

const Member = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.image_element} onClick={() => props.onClick(props.item.name)}>
      <img
        width="200px"
        height="200px"
        className={classes.image}
        src={props.item.url}
      />
      <p className={classes.text}> {props.item.name} </p>
      <p style={{ margin: 0 }}> {props.item.role} </p>
    </div>
  );
}


const FakeMember = () => {
  const classes = useStyles();
  return (
    <div className={classes.image_element}>
      <Skeleton className={classes.image} variant="circle" width={200} height={200} />
      <Skeleton width={100} />
      <Skeleton width={100} />
    </div>
  );

}

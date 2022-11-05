import Layout from "../components/layout/layout";
import WaveBox from "../components/ui/wave-box";
import Box from "../components/ui/box";
import { makeStyles } from "@material-ui/styles";
import Comments from "../components/ui/comments";
import Services from "../components/sections/services";
import Equipe from "../components/sections/equipe";
import Partenaires from "../components/sections/partenaires";
import About from "../components/sections/about";
import { getAllMembers, getAllComments, getAllServices, getMember } from "./api/feuille";
import { Chip, Modal, Typography } from "@material-ui/core";
import { useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(() => ({
  presentation_box : {
    padding: "50px",
    minHeight: "80vh",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  },
  comments_box: {
    height: "auto",
    background: "#cadbd6",
    padding: "5em"
  },
  partenaires_box:{
    padding: "3em",
    height: "auto" 
  }
}));

const useModalStyles = makeStyles(() => ({
  box:{
    width: "auto",
    height: "auto",
    background: "ghostwhite",
    borderRadius: 10,
    boxShadow: "10px 10px 80px 8px rgba(0,0,0,0.5)",
    padding: "2rem"
  }
}));

const UserInfo = ({open, handleClose, user}) => {
  const styles = useModalStyles();
  return (
    <div>
      <Modal
      open={open}
      onClose={handleClose}
      style={{justifyContent:"center", display:"flex",alignItems: "center", flexDirection:"column"}}
      >
      <>
        {user ?
            <img
              width="200px"
              height="200px"
              style={{ borderRadius: "50em", }}
              src={user.url}
            />:
          <Skeleton variant="circle" width={200} height={200} />
        }
        <Box className={styles.box}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {user? user.name : "???"}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {user? user.quote : "???"}
            </Typography>
            <Chip label={user ? user.role : "??"} variant="outlined" color="primary" />
          </Box>
      </>
      </Modal>
    </div>
  )
}

export default function Home(props) {
  const classes = useStyles();

  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setUser(null);
    setOpen(false);
  }

  const handleOnMemberClick = (name) => {
    getMember(name).then(data => {
      setUser(data[0])
      setOpen(true);
    }).catch(console.log)
  };

  return (
    <Layout>
      <div>
        <Box id="about" top={false} className={classes.presentation_box} >
          <About />
        </Box>

        <WaveBox
          id="services"
          color="#cadbd6" outline="#8d9999"
          subStyle={{ padding: "5rm", height: "auto" }} >
        <Services data={props.services} />
        </WaveBox>

        <UserInfo open={open} handleClose={handleClose} user={user}/>
        <Box 
          id="team"
          style={{ padding: "5em", height: "auto" }}>
          <Equipe members={props.members} onClick={handleOnMemberClick}/>
        </Box>

        <Box
          id="comments"
          boxColor="#cadbd6" bottom={true}
          className={classes.comments_box} >
          <h1> Comments </h1>
          <Comments comments={props.comments} />
        </Box>

        <Box className={classes.partenaires_box} >
          <Partenaires />
        </Box>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(_context) {
  const members = await getAllMembers();
  const comments = await getAllComments();
  const services = await getAllServices();

  return {
    props: { members, comments, services },
  };
}


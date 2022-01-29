import { Grid } from "@material-ui/core";
import Card from "./EmpCard";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    padding: '20px 20px',
      background: '#282c34',
  },
  card: {
    position: 'absolute',
},
});

const Body = () => {
  const classes = useStyles();

  const users = useSelector((state) => state.user);
  var userList = [];

  if (users) {
    userList = users.map((my_user) => (
      <Grid item xs={12} sm={6} md={4}>
        <Card person = {my_user} />
      </Grid>
    ));
  }

  return (
    <Grid container spacing={3} className={classes.root}>
      {userList}
    </Grid>
  );
};

export default Body;
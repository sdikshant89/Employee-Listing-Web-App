import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: '150px',
    variant: "outlined",
    background: '#00612a',
    padding: '25px 25px',
  },
  root1: {
    minWidth: '150px',
    variant: "outlined",
    background: '#00612a',
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    color: 'black', 
    fontSize: '20px',
    textAlign: "center",
  },
  username: {
    color: 'white',
    marginBottom: 12,
    textAlign: "center",
  },
  pos1: {
    marginBottom: 12,
    flexGrow: 3,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.pos}>
          <AssignmentIndIcon />
        </div>

        <Typography variant="h5" component="h3" className={classes.title}>  {props.person.name}  </Typography>
        <Typography className={classes.username}>  #{props.person.username}  </Typography>
      </CardContent>
      <div className={classes.root1}>
        <Grid container spacing={3}>
          
          <Grid item xs={6}>
          <div style = {{color: 'white', textAlign: 'center'}}>Phone</div>
            <Typography variant="h8" component="h6" style = {{color: 'black', textAlign: 'center', fontSize: '12px'}}>
              {props.person.phone}
            </Typography>
          </Grid>

          <Grid item xs={6}>
              <div style = {{color: 'white', textAlign: 'center'}}>Website</div>
            <Typography variant="h7" component="h5" style = {{color: 'black', textAlign: 'center', fontSize: '12px'}} >
                {props.person.website}
            </Typography>

          </Grid>
        </Grid>
      </div>
    </Card>
  );
}
import React from "react";
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';


import styles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function HomeProviders() {
  const classes = useStyles();

  const [spacing, setSpacing] = React.useState(2);


  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Providers Near Me</h2>
        </div>
       
        <div>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      
        </div>
        
       
        
      </div>
    </div>
  );
}

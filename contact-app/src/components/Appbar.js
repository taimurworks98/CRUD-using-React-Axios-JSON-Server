import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Theme, createStyles, useTheme } from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => createStyles ({
    
    root: {
        display: "flex"
      },
      
      appBar: {
        [theme.breakpoints.up("lg")]: {
          width: '100%',
        }
      },

      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,

      content: {
        flexGrow: 1,
        padding: theme.spacing(3)
      },

}));


export default function Appbar(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <h2 style={{marginLeft:'43%', marginTop:'0%'}}>
            DASHBOARD
          </h2>
        </Toolbar>
        </AppBar>
    </div>
    )
}

export function AppbarAdd(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <h2 style={{marginLeft:'43%', marginTop:'0%'}}>
            ADD CONTACT
          </h2>
        </Toolbar>
        </AppBar>
    </div>
    )
}

export function AppbarEdit(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <h2 style={{marginLeft:'43%', marginTop:'0%'}}>
            EDIT CONTACT
          </h2>
        </Toolbar>
        </AppBar>
    </div>
    )
}

export function AppbarDetail(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <h2 style={{marginLeft:'43%', marginTop:'0%'}}>
            CONTACT DETAILS
          </h2>
        </Toolbar>
        </AppBar>
    </div>
    )
}
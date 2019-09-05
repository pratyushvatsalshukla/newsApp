import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import {AppBar, Container, Button, Grid, Card, CardHeader, IconButton} from '@material-ui/core';
import {Close} from '@material-ui/icons'

const styles = theme => ({
  root : {
    textAlign: 'left'
  }
});


class Dashboard extends Component {

  render(){
    const {classes} = this.props
    return (
        <div className='Dashboard'>
            <AppBar position="static" color="default" className='appBar'>
              <Container className={classes.root} >
                <Button variant="contained">
                  Show Latest News
                </Button>
              </Container>
            </AppBar>
            <Container>
            <Grid container spacing={2} className='content' >
              <Grid item xs={4} className='filterBox' >
                h1
              </Grid>

              <Grid item xs={8} className='newsContainer' >
                <Card>
                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <Close />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  </Card>
              </Grid>
            </Grid>
            </Container>
        </div>
      );
  }
}

export default withStyles(styles)(Dashboard);
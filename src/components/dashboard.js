import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import {AppBar, Container, Button, Grid, Card, CardHeader, IconButton, CardContent, MenuItem, TextField} from '@material-ui/core';
import {Close, Replay} from '@material-ui/icons'

const styles = theme => ({
  root : {
    textAlign: 'left'
  },
  menu: {
    width: 200,
  },
  textField:{
    width:200
  }
});


class Dashboard extends Component {

  state = {
    language: ''
  }

  handleChange = name => event => {
    this.setState({ 
      [name]: event.target.value 
    })
  };

  render(){
    const {classes} = this.props
    const values = this.state
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
                <Card>
                  <CardHeader
                      action={
                        <IconButton aria-label="replay" onClick={this.handleReset} >
                          <Replay />
                        </IconButton>
                      }
                      title="Filter"
                    /> 
                    <CardContent>
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Language "
                        className={classes.textField}
                        value={values.language}
                        onChange={this.handleChange('language')}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        // margin="normal"
                        // variant="filled"
                      >
                        {['japanese', 'korean', 'hindi'].map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </CardContent>
                </Card>
              </Grid>

              <Grid item xs={8} className='newsContainer' >
                <Card>
                  <CardHeader
                    action={
                      <IconButton aria-label="close">
                        <Close />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardContent>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus voluptas sunt harum sequi fuga, nemo quae rem obcaecati magni, nostrum laboriosam ea et, in quo aperiam quas tenetur sapiente.</p>
                    <p>referrence</p>
                    <a href="https://www.youtube.com/watch?v=ALj5MKjy2BU">https://www.youtube.com/watch?v=ALj5MKjy2BU</a>
                  </CardContent>
                  </Card>
              </Grid>
            </Grid>
            </Container>
        </div>
      );
  }
}

export default withStyles(styles)(Dashboard);
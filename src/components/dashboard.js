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
    width: '100%'
  }
});


class Dashboard extends Component {

  state = {
    language: '',
    country: '',
    startdate: '',
    enddate: ''
  }

  handleChange = name => event => {
    this.setState({ 
      [name]: event.target.value 
    })
  };

  handleClose =  (e)=>{
    e.persist();
    console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList)
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList += ' remove'
  }

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
                      <TextField
                        select
                        label="Country "
                        className={classes.textField}
                        value={values.country}
                        onChange={this.handleChange('country')}
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
                      <TextField
                        // id="date"
                        label="Start Date"
                        type="date"
                        // defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value = {values.startdate}
                        onChange={this.handleChange('startdate')}
                      />
                      <TextField
                        // id="date"
                        label="End Date"
                        type="date"
                        // defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value = {values.enddate}
                        onChange={this.handleChange('enddate')}
                      />
                    </CardContent>
                </Card>
              </Grid>

              <Grid item xs={8} className='newsContainer' >
                <Card>
                  <CardHeader
                    action={
                      <IconButton aria-label="close" onClick={this.handleClose} >
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
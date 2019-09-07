import React, { Component } from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import {AppBar, Container, Button, Grid, Card, CardHeader, IconButton, CardContent, MenuItem, TextField, CardActions} from '@material-ui/core';
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
    enddate: '',
    news: [],
    availableLang: [],
    availableRegions: []
  }

  handleChange = name => event => {
    this.setState({ 
      [name]: event.target.value 
    })
    console.log(name,event.target.value )
  };

  handleClose =  (e)=>{
    e.persist();
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList += ' remove'
  }

  componentWillMount(){
    console.log('I am mounting')
    const API_KEY = 'eb-XCIW7hhyBptar_MVH2NmFYQvbqImeKWIkj4NProcfib6S'
    const url = 'https://api.currentsapi.services/v1/latest-news?' +
    'apiKey='+ API_KEY
    axios.get(url).then(resp => {
      console.log(resp)
      this.setState({
        news : resp.data.news
      })
    })

    axios.get('https://api.currentsapi.services/v1/available/languages').then(resp =>{
      console.log(resp)
      this.setState({
        availableLang : resp.data.languages
      })
    })

    axios.get('https://api.currentsapi.services/v1/available/regions').then(resp =>{
      console.log(resp)
      this.setState({
        availableRegions : resp.data.regions
      })
    })
  }

  renderNews(){
    return this.state.news.map((news)=>{
      return (
        <Card key={news.id} className='newscard' >
          <CardHeader
            action={
              <IconButton aria-label="close" onClick={this.handleClose} >
                <Close />
              </IconButton>
            }
            title={news.title}
            subheader={`${news.author} | ${news.published}`}
          />
          <CardContent>
            <p>{news.description}</p>
            <p className='bold' >referrence</p>
            <a href={news.url} >{news.url}</a>
          </CardContent>
        </Card>
      )
    })
  }

  showNews = ()=>{
    const API_KEY = 'eb-XCIW7hhyBptar_MVH2NmFYQvbqImeKWIkj4NProcfib6S'
    const url = 'https://api.currentsapi.services/v1/search?' +
    'language='+ this.state.language +
    '&country='+ this.state.country +
    '&apiKey='+ API_KEY
    axios.get(url).then(resp => {
      console.log(resp)
      this.setState({
        news : resp.data.news
      })
    })
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
                      >
                        {this.state.availableLang && Object.entries(this.state.availableLang).map((option, index) => (
                          <MenuItem key={index} value={option[1]}>
                            {option[0]}
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
                      >
                        {this.state.availableRegions && Object.entries(this.state.availableRegions).map((option, index) => (
                          <MenuItem key={index} value={option[1]}>
                            {option[0]}
                          </MenuItem>
                        ))}
                      </TextField>
                      {/* <TextField
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
                      /> */}
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" onClick={this.showNews} >
                        Show news
                      </Button>
                    </CardActions>
                </Card>
              </Grid>

              <Grid item xs={8} className='newsContainer' >
                {this.renderNews()}
              </Grid>
            </Grid>
            </Container>
        </div>
      );
  }
}

export default withStyles(styles)(Dashboard);
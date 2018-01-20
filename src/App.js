import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }
  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <RaisedButton
          onClick={this.handleClick}
          label="Go to.."
        />
        <Popover className="App"
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Library" href="/library" />
            <MenuItem primaryText="Landing" href= "/" />
            <MenuItem primaryText="Profile" href="/profile" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      <div className="App">
        <header className="App-header">
        <nav>
        </nav>
        
        {/* <img src={require('./../public/assets/images/piano.jpeg')} alt = "" /> */}
        
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/Album/:slug" component={Album} />
        </main>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

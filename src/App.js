import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import Placeholder from './components/Placeholder'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




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
      <MuiThemeProvider>
        <div id="header">
        <img id = "blocJams" src="../images/blocJams.png" alt="Bloc Jams" 
          onClick={this.handleClick}
        />
          <ul id="nav">
            <li><a href="/">Home</a></li>
            <li><a href="/library">Library</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      <div className="App">
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/Album/:slug" component={Album} />
          <Route path="/Profile" component={Placeholder} />
          <Route path="/About" component={Placeholder} />
        </main>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

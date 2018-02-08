import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';


let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);



class Library extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: albumData };
    }
    render() {
        return (
            <MuiThemeProvider>
            <SelectableList className = 'library' >
                {
                    this.state.albums.map( (album, index) =>
                    <Link to={`/album/${album.slug}`} key={index}>
                        <img src = {album.albumCover} alt={album.title}/>
                        <ListItem
                        value={1}
                        primaryText = {album.title}
                        secondaryText = {album.artist}
                        />
                    </Link>
                    )
                }
            </SelectableList>
            </MuiThemeProvider>
        );
    }
}

export default Library;
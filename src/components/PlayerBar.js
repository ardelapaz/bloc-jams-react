import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //do I need this?
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';

class PlayerBar extends Component {
    render() {
        return (
          <MuiThemeProvider>
            <section className = "player-bar">
                <section id="buttons">
                <FloatingActionButton id="previous" onClick={this.props.handlePrevClick}>
                  <span className="ion-skip-backward"></span>
                </FloatingActionButton>
                <FloatingActionButton id="play-pause" onClick={this.props.handleSongClick}>
                  <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play' }></span>
                </FloatingActionButton>
                <FloatingActionButton id="next" onClick = {this.props.handleNextClick}>
                  <span className="ion-skip-forward"></span>
                </FloatingActionButton>
              </section>
              <section id="time-control">                                                                    
                <div className="current-time">{Math.floor(this.props.currentTime)}</div>
                <Slider 
                className="seek-bar" 
                value={((Math.floor(this.props.duration)/60).toFixed(2)).replace('.', ':')}
                max="1"
                min="0"
                step="0.01"
                onChange={this.props.handleTimeChange}
                 />
                <div className="total-time">{(((this.props.duration)/60).toFixed(2)).replace('.', ':')}</div>
              </section>
              <section id="volume-control">
                <div className="icon ion-volume-low"></div>
                <Slider 
                className="seek-bar" 
                value={this.props.volume}
                min="0"
                max="1"
                step="0.01"
                onChange={this.props.handleVolumeChange} 
                />
                <div className="icon ion-volume-high"></div>
              </section>
            </section>
            </MuiThemeProvider>
        );
    }
}

export default PlayerBar;
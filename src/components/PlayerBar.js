import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //do I need this?
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';

var test = {
  color: 'red'
}


class PlayerBar extends Component {
  formatTime(input) {
    var seconds = Math.floor(input);
    if (seconds > 60) {
        var minute = Math.floor(seconds / 60);
        seconds = seconds - (minute * 60);
        if (seconds < 10) {
            return (minute + ':0' + seconds)
        } else if (seconds >= 10) {
            return (minute + ':' + seconds)
        }
    } else if (seconds < 10) {
        return ('00:0' + seconds)
    } else {
        return ('00:' + seconds)
    }
  }
    render() {
        return (
          <MuiThemeProvider>
            <section className = "player-bar">
                <section id="buttons">
                <section id="test"> 
                <FloatingActionButton backgroundColor="red" mini={true} id="previous" onClick={this.props.handlePrevClick}>
                  <span className="ion-skip-backward"></span>
                </FloatingActionButton>
                </section>
                <FloatingActionButton backgroundColor="red" id="play-pause" onClick={this.props.handleSongClick}>
                  <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play' }></span>
                </FloatingActionButton>
                <section id="test"> 
                <FloatingActionButton backgroundColor="red" mini={true} id="next" onClick = {this.props.handleNextClick}>
                  <span className="ion-skip-forward"></span>
                </FloatingActionButton>
                </section>
              </section>
              <section id="time-control">                                                                    
                <div className="current-time">{this.formatTime(this.props.currentTime)}</div>
                <Slider 
                className="seek-bar time"
                value={this.props.currentTime}
                max={this.props.duration}
                min="0"
                step="0.01"
                onChange={this.props.handleTimeChange}
                 />
                <div className="total-time">{this.formatTime(this.props.duration)}</div>
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
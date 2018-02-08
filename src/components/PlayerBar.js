import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //do I need this?
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


var test = {
  color: 'red',
}
const muiTheme = getMuiTheme({
  slider: {
    selectionColor: '#ff0000',
    handleFillColor: '#ff0000'
  }
});

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
      <MuiThemeProvider muiTheme = {muiTheme}>
        <section id="music-control">
          <section className="player-bar">
            <p className="current-time">{this.formatTime(this.props.currentTime)}</p>
            <p className="total-time">{this.formatTime(this.props.duration)}</p>
            <section id="time-control">
              <Slider
                sliderStyle={test}
                className="seek-bar time"
                value={this.props.currentTime}
                max={this.props.duration}
                min={0}
                step={(this.props.duration) / 60}
                onChange={(e, val) =>this.props.handleTimeChange(val)}
              />
            </section>
            <div id="vol" className="icon ion-volume-low"></div>
            <div id="vol2" className="icon ion-volume-high"></div>
            <section id="volume-control">
              <Slider
                className="seek-bar"
                defaultValue={50}
                min={0}
                max={100}
                step={1}
                onChange={(e, val) => this.props.handleVolumeChange(val)}
              />
            </section>
          </section>
          <section id="buttons">
            <section id="individualPlaybackButtons">
              <FloatingActionButton backgroundColor="red" mini={true} id="previous" onClick={this.props.handlePrevClick}>
                <span className="ion-skip-backward"></span>
              </FloatingActionButton>
            </section>
            <FloatingActionButton backgroundColor="red" id="play-pause" onClick={this.props.handleSongClick}>
              <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
            </FloatingActionButton>
            <section id="individualPlaybackButtons">
              <FloatingActionButton backgroundColor="red" mini={true} id="next" onClick={this.props.handleNextClick}>
                <span className="ion-skip-forward"></span>
              </FloatingActionButton>
            </section>
          </section>
          </section>
            </MuiThemeProvider>
        );
    }
}

export default PlayerBar;
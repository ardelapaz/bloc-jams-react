import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Album extends Component {
    constructor(props) {
        super(props);

        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album,
            currentSong: album.songs[0],
            isPlaying: false,
            currentTime: 0,
            duration: album.songs[0].duration,
            volume: 80
        };
        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
    }

    componentDidMount() {
        this.eventListeners = {
            timeupdate: e => {
              this.setState({ currentTime: this.audioElement.currentTime });
            },
            durationchange: e => {
              this.setState({ duration: this.audioElement.duration });
            },
            volumeupdate: e => {
                this.setState ({ volume: this.audioElement.volume });
            }
          };
          this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
          this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
          this.audioElement.addEventListener('volumecchange', this.eventListeners.volumeupdate);
        }
     
        componentWillUnmount() {
          this.audioElement.src = null;
          this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
          this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
          this.audioElement.removeEventListener('volumeupdate', this.eventListeners.volumeupdate);
    }
    
    play() {
        this.audioElement.play();
        this.setState({isPlaying: true });
    }

    pause() {
        this.audioElement.pause();
        this.setState({isPlaying: false});
    }

    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState({ currentSong: song });
    }

    handleSongClick(song) {
        const isSameSong = this.state.currentSong === song;
        if (this.state.isPlaying && isSameSong) {
            this.pause();
        } else {
            if (!isSameSong) {
                this.setSong(song);
            }
                this.play();
        }
    }

    handlePrevClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.max(0, currentIndex-1);
        const newSong = this.state.album.songs[newIndex];
       
        this.setSong(newSong);
        this.play(newSong);
    }

    handleNextClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = currentIndex + 1;
        if (newIndex > this.state.album.songs.length) { return; }
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play(newSong);
    }

    handleTimeChange(e) {
        const newTime = this.audioElement.duration * e.target.value;
        this.audioElement.currentTime = newTime;
        this.setState({ currentTime: newTime });
    }

    handleVolumeChange(e) {
        const newVolume = e.target.value;
        this.audioElement.volume = newVolume;
        this.setState({ volume: newVolume });
    }

    formatTime() {
        const currentTime = this.state.album.currentTime;
        var newTime = Math.floor(currentTime);
        newTime = newTime + ":" + currentTime[2] + currentTime[3];
        return newTime;
        //ehh I found a ghetto way of doing this in dd
    }

  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

      <section className="album">
        <section id="album-info">
        <img id="album-cover-art" src={this.state.album.albumCover} />
        <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Artist</TableHeaderColumn>
        <TableHeaderColumn>Duration</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
    {
                    this.state.album.songs.map( (song, index) =>
      <TableRow onClick {...() => this.handleSongClick(song)}>
        <TableRowColumn>{song.title}</TableRowColumn>
        <TableRowColumn>{this.state.album.artist}</TableRowColumn>
        <TableRowColumn>{song.duration}</TableRowColumn>
      </TableRow>
                    )}
    </TableBody>
  </Table>
);
</section>
            <PlayerBar 
            isPlaying={this.state.isPlaying} 
            currentSong={this.state.currentSong}
            currentTime={this.state.currentTime}
            duration = {this.state.duration}
            handleSongClick={() => this.handleSongClick(this.state.currentSong)}
            handlePrevClick={() => this.handlePrevClick()}
            handleNextClick={() => this.handleNextClick()}
            handleTimeChange={(e) => this.handleTimeChange(e)}
            handleVolumeChange={(e) => this.handleVolumeChange(e)} />
      </section>
      </MuiThemeProvider>
    );
  }
}

export default Album;
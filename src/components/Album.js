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

var test = {
    color: 'red'
}


class Album extends Component {
    constructor(props) {
        super(props);

        const album = albumData.find(album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album,
            currentSong: album.songs[0],
            isPlaying: false,
            currentTime: 0,
            duration: album.songs[0].duration,
            volume: 50
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
                this.setState({ volume: this.audioElement.volume });
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
        this.setState({ isPlaying: true });
    }

    pause() {
        this.audioElement.pause();
        this.setState({ isPlaying: false });
    }

    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState({ currentSong: song });
    }

    handleSongClick(song) {
        const isSameSong = this.state.currentSong === song;
        console.log("test");
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
        const newIndex = Math.max(0, currentIndex - 1);
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

    handleVolumeChange(val) {
        this.audioElement.volume = (val/100);
        this.setState({ volume: val });
    }

    handleTimeChange(val) { 
        this.audioElement.currentTime = val;
        this.setState({ currentTime: val });
    }

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
            <MuiThemeProvider >
                <section className="album">
                    <section id="album-info">
                    <div id="album-cover-art">
                        <img src={this.state.album.albumCover} alt="Album cover" />
                        <h1 id="artist"> {this.state.album.artist} </h1>
                        <p className = "albumInfo"> This is where album information would go. A little bit of a background of the album along with the release date of the album. </p>
                    </div>
                        <Table onRowSelection={val => this.handleSongClick(this.state.album.songs[val]) }>
                            <TableHeader displaySelectAll = {false} adjustForCheckbox = {false}>
                                <TableRow >
                                    <TableHeaderColumn style={test}>Title</TableHeaderColumn>
                                    <TableHeaderColumn style={test}>Duration</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody
                            displayRowCheckbox={false}>
                                {
                                    this.state.album.songs.map((song, index) =>
                                        <TableRow>
                                            <TableRowColumn>{song.title}</TableRowColumn>
                                            <TableRowColumn>{this.formatTime(song.duration)}</TableRowColumn>
                                        </TableRow>
                                    )}
                            </TableBody>
                        </Table>
                    </section>
                    <PlayerBar
                        isPlaying={this.state.isPlaying}
                        currentSong={this.state.currentSong}
                        currentTime={this.state.currentTime}
                        duration={this.state.duration}
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
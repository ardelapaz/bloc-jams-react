import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './../App.css'


var heroStyle = {
  height: '25vh',
  width: '100vw'
}
var cardStyle = {
  height: '50vh',
  width: '50vw',
  
}
const Landing = () => (
  <section className="landing">
  <div id = "top">
    <h1 id ="top1">
      Redefining online music libraries
    </h1>
      <img id = "logo" src="../images/blocJams.png"></img>
  </div>

    <section className="selling-points">
      <Card is="center" style={cardStyle}>
        <CardMedia style={cardStyle} overlay={<CardTitle title="Choose your music" subtitle="The world is full of music; why should you have to listen to music that someone else chose?" />}>
          <img src="../images/player.jpeg"style={cardStyle} />
        </CardMedia>
      </Card>
      <Card style={cardStyle}>
        <CardMedia style={cardStyle} overlay={<CardTitle title="Unlimited, streaming, ad-free" subtitle="No arbitrary limits. No distractions." />}>
          <img src="../images/board.jpeg"style={cardStyle} />
        </CardMedia>
      </Card>
      <Card style={cardStyle}>
        <CardMedia style={cardStyle} overlay={<CardTitle title="Mobile enabled" subtitle="Listen to your music on the go. This streaming service is available on all mobile platforms." />}>
          <img src="../images/mic.jpeg"style={cardStyle} />
        </CardMedia>
      </Card>
    </section>
  </section>
);

export default Landing;
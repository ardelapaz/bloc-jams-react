import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Landing = () => (
    <section className="landing">
    <h1 className="hero-title">Redefining online music libraries</h1>
    
    <section className="selling-points">
    <Card>
      <div className="point">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
        <CardMedia>
        <img src="src/images/piano.jpeg" />
        </CardMedia>
      </div>
      </Card>
      <Card>
      <div className="point">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      </Card>
      <Card>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
      </Card>
    </section>
    </section>
);

export default Landing;
import React from 'react';
import './../App.css'

const Landing = () => (
  <section className="landing">
    <section id="hero">
      <div id="top">
        <h1 id="top1">
          Redefining online music libraries
        </h1>
      </div>

    </section>

    <section className="selling-points">
      <img id="landingImages" src="../images/player.jpeg" alt="" />
      <div id="landing-text">
        <h2>Choose your music</h2>
        <p className="landing"> The world is full of music; why should you have to listen to the music that someone else choses?</p>
      </div>
      <div id="landing-text">
        <h2>Unlimited, streaming, and add-free</h2>
        <p className="landing"> No arbitrary limits and no distractions.</p>
      </div>
      <img id="landingImages" src="../images/board.jpeg" alt="" />
      <img id="landingImages" src="../images/mic.jpeg" alt="" />
      <div id="landing-text">
        <h2>Mobile enabled</h2>
        <p className="landing"> Listen to your music on the go. This streaming service is available on all platforms. </p>
      </div>
      <div id="landing-text">
        <h2>Record breaking music at record breaking speed</h2>
        <p className="landing"> Listen to all of your favorite artist's music as soon as it releases through our streaming platform.</p>
      </div>
      <img id="landingImages" src="../images/record.jpeg" alt="" />
    </section>
  </section>
);

export default Landing;
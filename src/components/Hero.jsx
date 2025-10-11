import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="Hero" title={"Hero"} />
      </div>
      <video src="/videos/hero.mp4" autoPlay loop muted playsInline />
      <button>Buy</button>
      <p>From $1500 or $133/month for 12 months</p>
    </section>
  );
};
export default Hero;

import React from "react";
import "./Body.scss";
import pic from "../assets/comm.png";

function Body() {
  return (
    <div className="body">
      <img
        src={pic}
        className="profilePic"
        alt="A handdrawn portrait of Ben, by @kindoflinc"
      ></img>
      <div className="desc">
        <p className="">
          Hi there! I'm a software developer, currently working for the checkout
          team for Expedia in Seattle, WA. I'm passionate about accessibility
          and good UX.
        </p>
        <p className="">
          In my free time, I try to be a good father to my{" "}
          <a
            href="https://twitter.com/wikileek_"
            className="body_link_leading hover-shadow hover-color"
            target="_blank"
            aria-label="terrible"
            rel="noopener noreferrer"
          >
            <span>t</span>
            <span>e</span>
            <span>r</span>
            <span>r</span>
            <span>i</span>
            <span>b</span>
            <span>l</span>
            <span>e</span>
          </a>{" "}
          <a
            href="https://twitter.com/influencer_bot"
            className="body_link hover-shadow hover-color"
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <span>T</span>
            <span>w</span>
            <span>i</span>
            <span>t</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
          </a>{" "}
          <a
            href="https://twitter.com/mobydick_bot"
            className="body_link hover-shadow hover-color"
            target="_blank"
            aria-label="bot"
            rel="noopener noreferrer"
          >
            <span>b</span>
            <span>o</span>
            <span>t</span>
          </a>{" "}
          <a
            href="https://twitter.com/WillShaky"
            className="body_link hover-shadow hover-color"
            target="_blank"
            aria-label="children"
            rel="noopener noreferrer"
          >
            <span>c</span>
            <span>h</span>
            <span>i</span>
            <span>l</span>
            <span>d</span>
            <span>r</span>
            <span>e</span>
            <span>n</span>
          </a>
          {". "}I make goofy useless side projects for fun, and even on occasion
          make useful things, such as{" "}
          <a
            href="https://podscript.net"
            className="body_link_leading hover-shadow hover-color"
            target="_blank"
            aria-label="Podscript"
            rel="noopener noreferrer"
          >
            <span>P</span>
            <span>o</span>
            <span>d</span>
            <span>s</span>
            <span>c</span>
            <span>r</span>
            <span>i</span>
            <span>p</span>
            <span>t</span>
          </a>{" "}
          which uses Automatic Speech Recognition to transcribe podcasts for a
          fraction of what it would cost to hire a transcriptionist.
        </p>
        <p>
          I also host a{" "}
          <a
            href="https://bit.ly/magneticlovepod"
            className="body_link_leading hover-shadow hover-color"
            target="_blank"
            aria-label="podcast"
            rel="noopener noreferrer"
          >
            <span>p</span>
            <span>o</span>
            <span>d</span>
            <span>c</span>
            <span>a</span>
            <span>s</span>
            <span>t</span>
          </a>{" "}
          about the Magnetic Fields' album, <i>69 Love Songs</i>, which can be
          found anywhere podcasts are cast...ed.
        </p>
      </div>
    </div>
  );
}

export default Body;

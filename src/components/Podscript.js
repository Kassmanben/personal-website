<div>
  Podscript is a web app that uses automatic speech recognition technology to
  transcribe podcast episodes for 1/50th the cost of paying a transcriptionist.
  I have given a couple conference talks about it, one of which can be seen
  <a
    href="https://www.youtube.com/watch?v=NOcdJQW5Rqs&list=PLclEcT4yxER7OrOA4OeG4_6UzM4rphQJ7&index=2"
    className="body_link_leading hover-shadow-no-underline hover-color-no-underline"
    target="_blank"
    aria-label="here"
  >
    <span>h</span>
    <span>e</span>
    <span>r</span>
    <span>e</span>
  </a>
  .
</div>;

<div>
  <article ref={this.botWeek}>
    In 2019, I challenged myself to write one twitter bot a day for a work week.
    I ended up finishing 4 different bots, each based around the idea of Markov
    chain modeling of lexicons to produce natural-sounding text.
  </article>
  <ul className={this.state.showBotDesc ? "" : "visually-hidden"}>
    <li>
      <a
        href="https://twitter.com/wikileek_"
        className="hover-shadow-no-underline hover-color-no-underline"
        target="_blank"
        aria-label="Wikileek"
      >
        <span>W</span>
        <span>i</span>
        <span>k</span>
        <span>i</span>
        <span>l</span>
        <span>e</span>
        <span>e</span>
        <span>k</span>
      </a>
      {this.state.showBotDesc ? botText[0] : ""}
    </li>
    <li>
      <a
        href="https://twitter.com/influencer_bot"
        className="hover-shadow-no-underline hover-color-no-underline"
        target="_blank"
        aria-label="ApologyBot"
      >
        <span>A</span>
        <span>p</span>
        <span>o</span>
        <span>l</span>
        <span>o</span>
        <span>g</span>
        <span>y</span>
        <span>B</span>
        <span>o</span>
        <span>t</span>
      </a>
      {this.state.showBotDesc ? botText[1] : ""}
    </li>
    <li>
      <a
        href="https://twitter.com/mobydick_bot"
        className="hover-shadow-no-underline hover-color-no-underline"
        target="_blank"
        aria-label="MobyDickBot"
      >
        <span>M</span>
        <span>o</span>
        <span>b</span>
        <span>y</span>
        <span>D</span>
        <span>i</span>
        <span>c</span>
        <span>k</span>
        <span>B</span>
        <span>o</span>
        <span>t</span>
      </a>
      {this.state.showBotDesc ? botText[2] : ""}
    </li>
    <li>
      <a
        href="https://twitter.com/WillShaky"
        className="hover-shadow-no-underline hover-color-no-underline"
        target="_blank"
        aria-label="WillShaky"
      >
        <span>W</span>
        <span>i</span>
        <span>l</span>
        <span>l</span>
        <span>S</span>
        <span>h</span>
        <span>a</span>
        <span>k</span>
        <span>y</span>
      </a>
      {this.state.showBotDesc ? botText[3] : ""}
    </li>
  </ul>
  <article>
    At the end of all of this, I wrote an article on Medium, to help other
    people interested in building their own Twitter bots! You can read my
    article
    <a
      href="https://medium.com/@kassmanben/creating-a-markov-chain-based-twitter-bot-using-python-node-js-and-heroku-1ac0b5912f2d"
      className="body_link_leading hover-shadow-no-underline hover-color-no-underline"
      target="_blank"
      aria-label="here"
    >
      <span>h</span>
      <span>e</span>
      <span>r</span>
      <span>e</span>
    </a>
    .
  </article>
  <button onClick={() => this.handleClick()} className="expandButton">
    {this.state.showBotDesc ? "Show Less" : "Show More"}
  </button>
</div>;

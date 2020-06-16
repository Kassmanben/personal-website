import React, { Component } from "react";
import Modal from "react-modal";
import "./Projects.scss";

const PODSCRIPT = "Podscript";
const BOTWEEK = "Bot Week";
const RESILIENCE1220 = "Resilience1220";
const PEACETREE = "Peacetree";
const SLICEOFLIFE = "Slice Of Life";
const DONATIONCALCULATION = "Donation Calculation";

const modalText = {
  Podscript:
    "Built on a MEAN stack (MongoDB, Express, Angular, NodeJs), this application uses automatic speech recognition technology to transcribe podcasts for 1/50th the cost of doing it by hand",
  "Bot Week":
    "In 2019, I challenged myself to write one twitter bot a day for a work week. I ended up finishing 4 different bots, each based around the idea of Markov chain modeling of lexicons to produce natural-sounding text.",
  Resilience1220:
    "I worked with a non-profit in my hometown to update their current website and I maintain the site as a volunteer for the organization. They provide free counseling sessions for young people in the Conifer mountain area.",
  Peacetree:
    "I worked with a therapist in my hometown to build a website for her counseling practice, where new clients can contact her and read about her services. It also includes a blog where she can post weekly updates,",
  "Slice Of Life":
    "I worked with a therapist to design a website that allows people to track their time usage. It is currently being used as a tool by a couple therapists with their clients.",
  "Donation Calculation":
    "A quick side project I put together to put the average person's donation to charity in perspective, comparing it to the equivalent donation of a billionaire.",
};

const modalLinks = {
  Podscript: "https://podscript.net",
  Resilience1220: "https://resilience1220.org",
  Peacetree: "https://peacetreeco.com",
  "Slice Of Life": "https://www.piechartlife.com/",
  "Donation Calculation": "http://donationcalculation.com",
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModal: null,
      currentText: null,
      currentLink: null,
      showBots: false,
      showLink: false,
      collapsed: "collapsed",
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  getStyles = () => {
    var customStyles = {
      content: {
        top: "37%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "25px",
        backgroundColor: "white",
        borderRadius: "0 20px 0 0",
        fontFamily: "Source Code Pro, sans-serif",
        fontWeight: "700",
        transition: "border .5s ease-in, max-width .6s, color .1s ease-in",
      },
    };
    if (this.state.collapsed == "collapsed") {
      customStyles.content.border = "transparent 4px double";
      customStyles.content.maxWidth = "0%";
      customStyles.content.color = "transparent";
    } else {
      customStyles.content.border = "#45c3ff 4px double";
      customStyles.content.maxWidth = this.state.width > 1000 ? "36%" : "80%";
      customStyles.content.top = this.state.width > 1000 ? "37%" : "50%";
      customStyles.content.color = "#272727";
    }
    return customStyles;
  };

  toggleModal = (key) => (event) => {
    event.preventDefault();
    if (this.state.currentModal) {
      this.handleModalCloseRequest();
    } else {
      this.setState({
        ...this.state,
        currentModal: key,
        currentText: modalText[key],
        currentLink: modalLinks[key],
        collapsed: "expanded",
      });
    }
  };

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleModalCloseRequest = () => {
    setTimeout(
      function () {
        this.setState({
          ...this.state,
          currentModal: null,
          currentText: null,
          currentLink: null,
        });
      }.bind(this),
      500
    );
    this.setState({
      collapsed: "collapsed",
    });
  };

  botList() {
    if (this.state.currentModal === BOTWEEK) {
      return (
        <ul>
          <li>
            <a href="https://twitter.com/wikileek_" target="_blank">
              Wikileek
            </a>
          </li>
          <li>
            <a href="https://twitter.com/influencer_bot" target="_blank">
              Influencer Apology Bot
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mobydick_bot" target="_blank">
              Moby Dick Bot
            </a>
          </li>
          <li>
            <a href="https://twitter.com/willshaky" target="_blank">
              Will Shaky
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <a href={this.state.currentLink} target="_blank">
          Check out the {this.state.currentModal} website here.
        </a>
      );
    }
  }

  render() {
    const { currentModal } = this.state;

    return (
      <div className="projects">
        {this.state.showBots}
        <div className="projects_wrapper">
          <div className="project_section">
            <h3>
              <a
                className="hover-shadow-no-underline hover-color-no-underline podscript"
                target="_blank"
                aria-label="Podscript"
                onClick={this.toggleModal(PODSCRIPT)}
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
              </a>
            </h3>
          </div>

          <div className="project_section">
            <h3>
              <a
                onClick={this.toggleModal(BOTWEEK)}
                className="hover-shadow-no-underline hover-color-no-underline botweek"
                target="_blank"
                aria-label="BotWeek"
              >
                <span>B</span>
                <span>o</span>
                <span>t</span>
                <span> </span>
                <span>W</span>
                <span>e</span>
                <span>e</span>
                <span>k</span>
              </a>
            </h3>
          </div>

          <div className="project_section">
            <h3>
              <a
                onClick={this.toggleModal(RESILIENCE1220)}
                className="hover-shadow-no-underline hover-color-no-underline resilience"
                target="_blank"
                aria-label="Resilience1220"
              >
                <span>R</span>
                <span>e</span>
                <span>s</span>
                <span>i</span>
                <span>l</span>
                <span>i</span>
                <span>e</span>
                <span>n</span>
                <span>c</span>
                <span>e</span>
                <span>1</span>
                <span>2</span>
                <span>2</span>
                <span>0</span>
              </a>
            </h3>
          </div>

          <div className="project_section">
            <h3>
              <a
                onClick={this.toggleModal(PEACETREE)}
                className="hover-shadow-no-underline hover-color-no-underline peacetree"
                target="_blank"
                aria-label="Peacetree"
              >
                <span>P</span>
                <span>e</span>
                <span>a</span>
                <span>c</span>
                <span>e</span>
                <span>t</span>
                <span>r</span>
                <span>e</span>
                <span>e</span>
              </a>
            </h3>
          </div>

          <div className="project_section">
            <h3>
              <a
                onClick={this.toggleModal(SLICEOFLIFE)}
                className="hover-shadow-no-underline hover-color-no-underline slice-of-life"
                target="_blank"
                aria-label="Slice Of Life"
              >
                <span>S</span>
                <span>l</span>
                <span>i</span>
                <span>c</span>
                <span>e</span>
                <span> </span>
                <span>O</span>
                <span>f</span>
                <span> </span>
                <span>L</span>
                <span>i</span>
                <span>f</span>
                <span>e</span>
              </a>
            </h3>
          </div>

          <div className="project_section">
            <h3>
              <a
                onClick={this.toggleModal(DONATIONCALCULATION)}
                className="hover-shadow-no-underline hover-color-no-underline donation-calculation"
                target="_blank"
                aria-label="Donation Calculation"
              >
                <span>D</span>
                <span>o</span>
                <span>n</span>
                <span>a</span>
                <span>t</span>
                <span>i</span>
                <span>o</span>
                <span>n</span>
                <span> </span>
                <span>C</span>
                <span>a</span>
                <span>l</span>
                <span>c</span>
                <span>u</span>
                <span>l</span>
                <span>a</span>
                <span>t</span>
                <span>i</span>
                <span>o</span>
                <span>n</span>
              </a>
            </h3>
          </div>
        </div>

        <Modal
          id="modal"
          ref={this.myRef}
          aria={{
            labelledby: "heading",
            describedby: "fulldescription",
          }}
          contentLabel="modal"
          isOpen={currentModal != null}
          shouldCloseOnOverlayClick={true}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.toggleModal(null)}
          style={this.getStyles()}
          ariaHideApp={false}
        >
          <div className={"modal " + this.state.collapsed}>
            <div className="close" onClick={this.toggleModal(null)}>
              x
            </div>
            <h1 id="heading" ref={(h1) => (this.heading = h1)}>
              {this.state.currentModal}
            </h1>
            <div id="fulldescription" tabIndex="0" role="document">
              {this.state.currentText}
            </div>
            {this.botList()}
          </div>
        </Modal>
      </div>
    );
  }
}

export default Projects;

import * as React from 'react';
import Layout from '../components/Layout';
import classnames from 'classnames';

import * as css from '../styles/pages/index.module.css';
import * as grid from '../styles/grid.module.css';

import kadk from '../images/kadk.svg';
import ida from '../images/ida.png';

const IndexPage = () => {
  return (
    <Layout className={css.root}>
      <div className={css.header}>
        <div className={classnames(grid.container, grid.grid)}>
          <div className={classnames(grid.col, css.menu)}>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#open-call">Open Call</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className={classnames(grid.col, css.title)}>
            <h1>Processing Community Day CPH</h1>
          </div>
          <div className={classnames(grid.col, css.info)}>
            <h3>When?</h3>
            <p>
              October 2nd, 2021
              <br />
              10:00 - 15:00
            </p>
            <h3>Where?</h3>
            <p>The Royal Danish Academy - Architecture, Design, Conservation</p>
            <a
              className={css.register}
              target="_blank"
              rel="noreferrer"
              href="https://ida.dk/arrangementer-og-kurser/arrangementer/processing-community-day-copenhagen-341578"
            >
              Register
            </a>
            <p className={css.disclaimer}>
              This link opens in a new window as registration for this event is
              handled through IDA's website.
            </p>
          </div>
        </div>
      </div>
      <div className={classnames(grid.container, grid.grid)}>
        <div className={classnames(grid.col, css.text)}>
          <ul className={css.partners}>
            <li>Presented in partnership with</li>
            <li>
              <img src={kadk} />
              Institute of Visual Design at The Royal Danish Academy -
              Architecture, Design, Conservation
            </li>
            <li>
              <img src={ida} />
              IDA: The Danish Society of Engineers
            </li>
          </ul>
        </div>
        <div className={classnames(grid.col, css.text)} id="about">
          <h2>About the Event</h2>
          <p>
            Processing Community Day Copenhagen is a free, one-day event to
            celebrate the intersection of art and code. The day will consist of
            both workshops and lightning talks by people using code for creative
            and experimental projects. The event is a unique chance for everyone
            working with or just interested in code, design and digital art to
            meet in person, share what they're working on, learn from each other
            and make new connections. The event is open to everyone and requires
            no prior skills or knowledge of Processing or coding in general.
            Processing Community Day is a welcoming place for anyone interested
            in learning about programming, including those not normally
            represented in the fields of engineering and technology.
          </p>
          <p>
            <a href="https://processing.org/">Processing</a> is a free and
            open-source software platform for learning how to code within the
            context of the visual arts, created by Casey Reas and Ben Fry. It is
            complemented by a web version, called p5.js, created by Lauren
            McCarthy. To date, Processing and p5.js are used by a worldwide
            community of artists, coders, educators and students to create
            diverse art in the fields of graphic design, architecture, dance,
            photography, painting, etc. A focus of the Processing project is to
            make learning how to program and make creative work with code
            accessible to diverse communities, especially those who might not
            otherwise have access to these tools and resources.
          </p>
        </div>
        <div className={classnames(grid.col, css.text)} id="open-call">
          <h2>Open Call</h2>
          <p>
            Processing Community Day Copenhagen is looking for
            artists/designers/creative practitioners/computer
            scientists/amateurs or anyone in general who has an interest in code
            and would like to show and tell about their software-based project.
          </p>

          <p>
            We are interested in all sorts of projects: art, design, graphics,
            sound, text, poetry, interaction design, experience design, product
            design, installations, to name a few. Although we primarily focus on
            Processing and p5.js, other programming languages are also more than
            welcome.
          </p>

          <p>
            Our goal is to showcase a wide range of projects and people, and to
            discuss how everyone can work and think differently with code. We
            are open to everything, from the very simple and fun projects to
            complex cross-disciplinary productions.
          </p>

          <p>
            We have 8 places for the show and tell session. Each presenter will
            have a maximum of 15 minutes to present one (or more) project(s).
            Though slides are perfectly fine, live demos are encouraged.
          </p>

          <p>
            If you are interested in participating, please send an email with a
            brief description of yourself and your project to{' '}
            <a href="mailto:organizer@pcdcph.com">organizer@pcdcph.com</a>. The
            deadline for the open call is September 10th, 2021. Selected
            presenters will be notified directly. PCD@Copenhagen operates on a
            "sharing is caring" principle, so there is no fee for presenting.
          </p>
        </div>
        <div className={classnames(grid.col, css.text)} id="contact">
          <h2>Contact</h2>
          <p>
            Processing Community Day Copenhagen is organized by{' '}
            <a href="https://andreasrefsgaard.dk/">Andreas Refsgaard</a>,{' '}
            <a href="http://www.stigmollerhansen.dk/">Stig Møller Hansen</a>,
            and <a href="https://runemadsen.com/">Rune Madsen</a>. You can get
            in touch with us on{' '}
            <a href="mailto:organizer@pcdcph.com">organizer@pcdcph.com</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

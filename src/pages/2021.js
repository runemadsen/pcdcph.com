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
                <a href="#program">Program</a>
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
            <p>
              The Royal Danish Academy
              <br />
              Architecture, Design, Conservation
              <br />
              <a href="https://www.google.com/maps/place/Danneskiold-Sams%C3%B8es+All%C3%A9+53,+1434+K%C3%B8benhavn/@55.682198,12.6050285,19z/data=!4m5!3m4!1s0x465253258eb97c81:0xe37091a1d2402a0d!8m2!3d55.6822714!4d12.6052337?fbclid=IwAR2nhzA7LAV0jIZ56c3vnDU9tX8HDAW2unKW-2TjWKlR_c2enf6gylvcPYY">
                Danneskiold-Samsøes Allé 53
              </a>
              <br />
              Building 53/J
            </p>
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
            <li className={css.partnerSplit}>
              <img src={kadk} />
              Institute of Visual Design at The Royal Danish Academy
            </li>
            <li className={css.partnerSplit}>
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
        <div className={classnames(grid.col, css.text)} id="program">
          <h2>Program</h2>

          <ul>
            <li>
              10:00 <strong>Welcome</strong>
            </li>
            <li>
              10:20 <strong>Workshops</strong>
            </li>
            <ul>
              <li>
                Workshop 1: Beginner workshop in Processing with Anne Mette
                Møller Hartelius
              </li>
              <li>Workshop 2: Live coding in Improviz with Søren Peter</li>
            </ul>
          </ul>

          <ul>
            <li>
              12:00 <strong>Break + free sandwich</strong>
            </li>
          </ul>

          <ul>
            <li>
              13:00 <strong>Lightning talks</strong>
            </li>
            <ul>
              <li>
                Louise Foo + Halfdan Hauch Jensen: Description coming soon
              </li>
              <li>Louise Lessel: Shaders in P5js</li>
              <li>Marius Juul Nielsen: Processing for live performances</li>
              <li>Tom-Lucas Säger: Design & AI</li>
              <li>
                Carl Emil Carlsen: Audiovisual interactive experiences in
                Processing & Unity
              </li>
              <li>Mirabelle Jones: Immersive interactive storytelling</li>
            </ul>
          </ul>

          <ul>
            <li>
              15:00 <strong>Goodbye</strong>
            </li>
          </ul>
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

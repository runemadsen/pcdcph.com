import * as React from 'react';
import Layout from '../components/Layout';
import classnames from 'classnames';

import * as css from '../styles/pages/index.module.css';
import * as grid from '../styles/grid.module.css';

import dmjx from '../images/dmjx.png';
import ida from '../images/ida.png';
import kp from '../images/kp.png';
import shiffman from '../images/shiffman.png';

const IndexPage = () => {
  return (
    <Layout year="2022" className={css.root}>
      <div className={css.header}>
        <div className={classnames(grid.container, grid.grid)}>
          <div className={classnames(grid.col, css.menu)}>
            <ul>
              <li>
                <a href="#program">Program</a>
              </li>
              <li>
                <a href="#about">About</a>
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
              June 14th, 2022
              <br />
              16:00 - 21:00
            </p>
            <h3>Where?</h3>
            <p>
              University College Copenhagen
              <br />
              Department of Didactics and Digitalisation
              <br />
              <a href="https://www.google.dk/maps/place/University+College+Copenhagen/@55.6642507,12.5359436,17z/data=!3m1!4b1!4m5!3m4!1s0x46525254546b1fab:0xf4f7116f37351b1d!8m2!3d55.6642507!4d12.5359436">
                Carlsberg Campus
              </a>
              <br />
              Humletorvet 3<br />
              1799 København V
            </p>
            <a
              className={css.register}
              target="_blank"
              rel="noreferrer"
              href="https://ida.dk/arrangementer-og-kurser/arrangementer/processing-community-day-copenhagen-2022-345170"
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
          <h2>Presented in partnership with</h2>
          <ul className={css.partners}>
            <li>
              <a href="https://ida.dk/" className={css.ida}>
                <img src={ida} />
              </a>
              <p>The Danish Society of Engineers</p>
            </li>
            <li>
              <a href="https://www.dmjx.dk/" className={css.dmjx}>
                <img src={dmjx} />
              </a>
              <p>Danish School of Media and Journalism</p>
            </li>
            <li>
              <a href="https://www.kp.dk/en/" className={css.kp}>
                <img src={kp} />
              </a>
              <p>
                University College Copenhagen
                <br />
                Department of Didactics and Digitalisation
              </p>
            </li>
          </ul>
        </div>
        <div className={classnames(grid.col, css.text)} id="program">
          <h2>Program</h2>
          <img src={shiffman} />
          <p>
            This year we have the pleasure of welcoming{' '}
            <a href="https://shiffman.net/">Daniel Shiffman</a> to lead a
            workshop at Processing Community Day Copenhagen. Daniel is the host
            of{' '}
            <a href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw">
              The Coding Train YouTube channel
            </a>{' '}
            where he teaches concepts of programming in a fun and approachable
            way to 1.5 million subscribers. The Coding Train is a community
            welcoming beginner programmers and code-curious individuals to try
            their hand at expressing themselves with code, and the channel
            provides online educational content as sequenced video playlists,
            one-off video tutorials, and live streaming events. Daniel also
            teaches at the Interactive Telecommunications Program at NYU’s Tisch
            School of the Arts and serves on the Board of Directors of The
            Processing Foundation.
          </p>

          <p>
            More workshops and lightning talks will be announced as we get
            closer to the event. Do you have something to share? Please{' '}
            <a href="mailto:organizer@pcdcph.com">get in touch</a>!
          </p>
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

import * as React from 'react';
import Layout from '../components/Layout';
import classnames from 'classnames';

import * as css from '../styles/pages/index.module.css';
import * as grid from '../styles/grid.module.css';

import dmjx from '../images/dmjx.png';
import ida from '../images/ida.png';
import kp from '../images/kp.png';
import selcuk from '../images/selcuk.jpg';
import tim from '../images/tim.jpg';
import anna from '../images/anna.png';
import majken from '../images/majken.jpg';
import frederik from '../images/frederik.jpg';
import tameem from '../images/tameem.jpg';
import astrid from '../images/astrid.jpg';

const IndexPage = () => {
  return (
    <Layout year="2023" className={css.root}>
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
              November 11th, 2023
              <br />
              11:00 - 16:00
              <br />
              After-party at a nearby bar
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
              href="https://ida.dk/arrangementer-og-kurser/arrangementer/processing-community-day-copenhagen-2023-352133"
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

          <p>
            Join us for this year's Processing Community Day with keynotes and
            lightning talks by people using code for creative and experimental
            projects.
          </p>

          <p>
            Keynote <strong>Tim Rodenbröker</strong>
          </p>

          <img src={tim} />

          <p>
            This year we have the pleasure of welcoming Tim Rodenbröker, an
            educator and designer, who operates at the crossroads of
            communication and technology. He views code as a crucial element in
            modern design education. Over recent years, he has crafted an
            extensive array of commercial and self-commissioned projects that
            demonstrate and underscore the vast potential of creative coding in
            the field of communication design. Tim has established numerous
            online and offline communities centered around this theme,
            consistently striving to bring together individuals from diverse
            creative disciplines.
          </p>

          <p>
            Keynote <strong>Selçuk Artut</strong>
          </p>

          <img src={selcuk} />

          <p>
            We also have the pleasure of welcoming Selçuk Artut whose artistic
            research and production focus on theoretical and practical
            dimensions of human-technology relations. An author of seven books
            and an editor of one, Artut is an Associate Professor at the Visual
            Arts and Visual Communication Design Program Sabanci University,
            Istanbul, where he mainly teaches Sound and Interaction Courses. He
            has been releasing several albums as a member of the Post-Rock
            Avant-Garde music band Replikas since 1998. In 2016, Artut founded
            an audio-visual performance duo named RAW which produces works
            through creative coding and live-coding techniques.
          </p>

          <p>
            Lightning Talk <strong>Anna Shams Ili</strong>
          </p>

          <img src={anna} />

          <p>
            Anna (she/her) is a co-founder and member of the collective CURSOR -
            a Copenhagen-based platform reimagining tech and society through an
            intersectional feminist lens. She is responsible for the digital
            aspects of CURSOR, and ran the first CURSOR Creative Coding Camp in
            spring 2023. CURSOR hosts a variety of events and publishes a
            biannual magazine, the current theme of which is "Attention!"
          </p>

          <p>
            Lightning Talk <strong>Majken Overgaard</strong>
          </p>

          <img src={majken} />

          <p>
            Majken works as an independent curator and writer. Throughout her
            career Overgaard has focused on synergies between technology and
            contemporary art. The overall goal has been to explore the
            transdisciplinary universe, where art, science and technology
            intersect and form a creative environment for the development of new
            ideas, experiments and inventions. Her curatorial practice centers
            around feminist and democratic ideals - bringing together artists of
            diverse genders, ethnicities and cultural backgrounds.
          </p>

          <p>
            Lightning Talk <strong>Frederik Krogh</strong>
          </p>

          <img src={frederik} />

          <p>
            Frederik Krogh is a self-taught designer, visual artist, programmer
            and musician. Playing with geometry, color, type, animation and
            code, the ambition is to create something great yet simple, with or
            without technology.
          </p>

          <p>
            Lightning Talk <strong>Astrid Jakobsen</strong>
          </p>

          <img src={astrid} />

          <p>
            Astrid is an Interactive Design student at The Danish School of
            Media and Journalism. Her passion for design is rooted in a lifelong
            interest in everything that draws her attention visually. She wants
            to unite the simple but yet surprising elements of great design by
            using motion design and creative coding, and although she is not an
            experienced programmer, a curiosity for the potential that code has
            is what drives her.
          </p>

          <p>
            Lightning Talk <strong>Tameem Sankari</strong>
          </p>

          <img src={tameem} />

          <p>
            Tameem Sankari is a Syrian creative coding artist living in
            Copenhagen. He combines coding and retro graphics to create
            contemporary animations with a nostalgic feel. Depicting everyday
            objects, scenes or moments, Tameem is able to create highly abstract
            and experimental novel works, whilst still offering the viewer a
            sense of familiarity.
          </p>
        </div>
        <div className={classnames(grid.col, css.text)} id="about">
          <h2>About the Event</h2>
          <p>
            Processing Community Day Copenhagen is a free, one-day event to
            celebrate the intersection of design, art, and code. The day will
            consist of keynotes and lightning talks by people using code for
            creative and experimental projects. It’s a unique chance for
            everyone working with or just interested in code, design and digital
            art to meet in person, share what they're working on, learn from
            each other, and make new connections. The event is open to everyone
            and requires no prior skills or knowledge of coding. Processing
            Community Day is a welcoming place for anyone interested in learning
            about programming, including those not normally represented in the
            fields of engineering and technology.
          </p>
          <p>
            Processing is a free and open-source software platform for learning
            how to code within the context of the visual arts, created by Casey
            Reas and Ben Fry. It is complemented by a web version, called p5.js,
            created by Lauren McCarthy. To date, Processing and p5.js are used
            by a worldwide community of artists, coders, educators and students
            to create diverse art in the fields of graphic design, architecture,
            dance, photography, painting, etc. A focus of the Processing
            Foundation is to make learning how to program and make creative work
            with code accessible to diverse communities, especially those who
            might not otherwise have access to these tools and resources.
          </p>
          <p>
            Ligning talks <strong>Coming soon</strong>
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

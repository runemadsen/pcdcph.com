import * as React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <h2>About the Event</h2>
      <p>
        Processing Community Day Copenhagen is a free, one-day event to
        celebrate the intersection of art and code. The day will consist of both
        workshops and lightning talks by people using code for creative and
        experimental projects. The event is a unique chance for everyone working
        with or just interested in code, design and digital art to meet in
        person, share what they're working on, learn from each other and make
        new connections. The event is open to everyone and requires no prior
        skills or knowledge of Processing or coding in general. Processing
        Community Day is a welcoming place for anyone interested in learning
        about programming, including those not normally represented in the
        fields of engineering and technology.
      </p>
      <p>
        Processing is a free and open-source software platform for learning how
        to code within the context of the visual arts, created by Casey Reas and
        Ben Fry. It is complemented by a web version, called p5.js, created by
        Lauren McCarthy. To date, Processing and p5.js are used by a worldwide
        community of artists, coders, educators and students to create diverse
        art in the fields of graphic design, architecture, dance, photography,
        painting, etc. A focus of the Processing project is to make learning how
        to program and make creative work with code accessible to diverse
        communities, especially those who might not otherwise have access to
        these tools and resources.
      </p>
    </Layout>
  );
};

export default IndexPage;

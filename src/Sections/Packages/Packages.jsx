import React from 'react';
import Section1 from './Section1';
import { Helmet } from 'react-helmet-async';

const Packages = () => {
  return (
    <>
      <Helmet>
        <title>Packages & Pricing | Studio97</title>

        <meta
          name="description"
          content="Explore Studio97 packages and pricing. Discover the right package for your needs."
        />

        <link
          rel="canonical"
          href="https://studio97.in/packages"
        />
      </Helmet>

      <section className="Section1">
        <Section1 />
      </section>
    </>
  );
};

export default Packages;
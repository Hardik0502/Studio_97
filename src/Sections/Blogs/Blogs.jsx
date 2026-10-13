import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
  return (
    <>

    <Helmet>
<title>Blog & Insights | Studio97</title>

    <meta
      name="description"
      content="Read the latest articles, insights, updates, and stories from Studio97."
    />

    <link
      rel="canonical"
      href="https://studio97.in/blogs"
    />
  </Helmet>

<div className="section1 p-2 sm:p-2 bg-[#EBEBEB]">
    <section className='Section1' >
      < Section1 />
    </section>
</div>
    <section className='Section2' >
    < Section2 />
    </section>

    </>
  )
}

export default Blogs
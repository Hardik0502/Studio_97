import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'

const Blogs = () => {
  return (
    <>

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
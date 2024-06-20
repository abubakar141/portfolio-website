import React from 'react'
import Image from 'next/image'
import hired from "/public/hired.png"
const Projects = () => {
  return (
    <div>
        <center>
      <Image 
      src={hired}
      alt='hired img'
      className=''
      />
      </center>
    </div>
  )
}

export default Projects

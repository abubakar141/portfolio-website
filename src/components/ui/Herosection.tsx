import React from 'react'
import Image from 'next/image'
import ABZ from "/public/ABZ.jpeg"
import { Button } from './button'
const Herosection = () => {
  return (
    <div className='mt-24'>
        <center>
      <Image 
      src={ABZ} 
      alt='Abu Bakar'
      height={250}
      width={250}
      className='rounded-full'
      />
      <br />
       <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-blue-600">
        This Is Abu Bakar
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 font-semibold">
      Abu Bakar bin Zohaib is a dynamic web developer
      <br />
known for crafting innovative digital experiences.
<br />
With expertise in front-end and back-end
<br />
development, he creates sleek websites and
<br />
complex web applications.

.
      </p>
      <br />
      <Button variant={"outline"}>
     Hire Me
    </Button>
    </center>
    </div>
  )
}

export default Herosection

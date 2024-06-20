"use client"
import About from '@/components/ui/About'
import Main from '@/components/ui/Main'
import Skills from '@/components/ui/Skills'
import Contact from '@/components/ui/Contact'
import React from 'react'
import Projects from '@/components/ui/Projects'
const page = () => {
  return (
    <main >
     <Main />
     <About />
     <Skills />
   <Projects />
     <Contact />
    </main>
  )
}

export default page

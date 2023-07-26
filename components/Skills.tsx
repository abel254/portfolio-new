import React from 'react'
import Image from 'next/image'
import js from '../public/js.png'
import react from '../public/react.png'
import ts from '../public/ts.png'
import node from '../public/node.png'
import html from '../public/html.png'
import css from '../public/css.png'
import {abhaya} from '../utils/font'

const Skills = () => {
  return (
    <div className='bg-skillsbg py-10'>
      <h3 className='uppercase text-skillsintro text-bold text-xl text-center mb-5'>current frontend development skills</h3>
      <div className='flex justify-center mb-16' >
      <h2 className='text-center text-bold text-4xl text-skillsheading w-6/12'><span className={abhaya.className}>Developed scalable web applications with the following technologies</span></h2>
      </div>
      <div className='flex justify-center gap-10 mb-5'>
        <div className='flex flex-col items-center'>
            <Image src={js}  alt='Javascript' className='w-28 h-28'/>
            <span className='text-md text-bold'>JavaScript</span>
        </div>
        <div className='flex flex-col items-center'>
            <Image src={react}  alt='Javascript' className='w-28 h-28'/>
            <span className='text-md text-bold'>React js</span>
        </div>
        <div className='flex flex-col items-center'>
            <Image src={ts}  alt='Javascript' className='w-28 h-28'/>
            <span className='text-md text-bold'>TypeScript</span>
        </div>
        <div className='flex flex-col items-center'>
            <Image src={node}  alt='Javascript' className='w-28 h-28'/>
            <span className='text-md text-bold'>Node js</span>
        </div>
        <div className='flex flex-col items-center'>
            <Image src={html}  alt='Javascript' className='w-28 h-28'/>
            <span className='text-md text-bold'>HTML</span>
        </div>
        <div className='flex flex-col items-center'>
            <Image src={css}  alt='Javascript' className='w-28 h-28'/>
            <span className='text-md text-bold'>Tailwind CSS</span>
        </div>
      </div>
    </div>
  )
}

export default Skills

import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3__feature">
        <Feature/>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
          <p>Explore the library</p>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature/>
          <Feature/>
          <Feature/>


        </div>

      </div>
    </div>
  )
}

export default WhatGPT3
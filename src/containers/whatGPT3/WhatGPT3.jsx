import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3__feature">
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo consequatur, eaque quaerat rem laborum laudantium adipisci nisi reiciendis reprehenderit! Aperiam quod enim, quas omnis aut dolore earum reprehenderit? Atque, praesentium."/>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
          <p>Explore the library</p>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title= "Chatbots" text="We so opinion friends me message as delight whole front do not heard oh"/>
          <Feature title="Knowledgebase" text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloribus doloremque amet beatae."/>
          <Feature title="Education" text=" Veritatis ipsam nihil aspernatur eos, soluta amet quam provident ratione molestias non officia repudiandae asperiores itaque, dignissimos a nam enim, ea vero."/>
        </div>

      </div>

    </div>
  )
}

export default WhatGPT3

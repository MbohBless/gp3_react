import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="homr">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAi</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor aliquid quae, quod quis doloribus, incidunt ullam rerum consectetur eos qui corporis, saepe maxime. Explicabo vero numquam fugiat unde pariatur?</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type="button" className='gradient__button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={"people"}/>

        </div>
      </div>
    </div>
  )
}

export default Header
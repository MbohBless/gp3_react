import React from 'react'
import './possibility.css'
import possibliltyImage from '../../assets/possibility.png';
 
const Possibility = () => {
  return (
    <div className='gpt3_possibility section__padding' id="possibility">
      <div className='gpt3__possiblity-image'>
        <img src={possibliltyImage}/>
      </div>
      <div className='gpt3__possibility-content'>
       <h4> Request Early access to get started</h4>
       <h1 className='gradient__text'> The possibilities are beyond our imagination </h1>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore eligendi eaque, repudiandae atque officia minus. Similique, facilis beatae. Ipsa consequatur corporis earum ab perspiciatis asperiores sunt quasi at fugiat totam.</p>
       <h4>Request Early access to get sterted</h4>
      </div>
    </div>
  )
}

export default Possibility
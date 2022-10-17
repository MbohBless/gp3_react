import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData= [
  {
    title:"Improving end distrusts instantly",
     text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dignissimos! Id, nihil. Tempore repellendus in sed sapiente, aspernatur totam doloremque? Voluptas voluptatum expedita dolore quidem, consequatur velit quam molestias soluta."
  },
  {
    title:"Become the tended active",
     text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dignissimos! Id, nihil. Tempore repellendus in sed sapiente, aspernatur totam doloremque? Voluptas voluptatum expedita dolore quidem, consequatur velit quam molestias soluta."
  },
  {
    title:"Message or am noticing",
     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dignissimos! Id, nihil. Tempore repellendus in sed sapiente, aspernatur totam doloremque? Voluptas voluptatum expedita dolore quidem, consequatur velit quam molestias soluta."
  },
  {
    title:"Really boy law county",
     text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dignissimos! Id, nihil. Tempore repellendus in sed sapiente, aspernatur totam doloremque? Voluptas voluptatum expedita dolore quidem, consequatur velit quam molestias soluta."
  },
]
const Features = () => {

  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>
        The Future is Now You Just need To Realize it. Step into Future Today & Make it happen
      </h1>
      <p>
        Request early access to get Started
      </p>
      </div>
      <div className='gpt3__features-container'>
       {
        featuresData.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))
       }
      </div>
    </div>
  )
}

export default Features
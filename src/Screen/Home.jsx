import React from 'react'
import MediaCard from '../Card'
import { productData } from '../Data'

const Home = () => {
  return (
    <div>
        {
          productData.map((e,i)=>{
            return(
              <MediaCard key={i} id={e.id} title={e.title} desc={e.description} image={e.image} />
            )
          })
        }
    </div>
  )
}

export default Home;
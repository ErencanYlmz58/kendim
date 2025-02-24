import React from 'react'
import { aquarium1 } from '../assets'
import { aurora2 } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    {Image: "https://raw.githubusercontent.com/ErencanYlmz58/kendim/main/biz.png", title: 'Ekim 28, 2023', description: "Bazı tarihler yoktur ama bazı anlar sonsuzdur… ❤️"},
    // { Image: "https://raw.githubusercontent.com/ErencanYlmz58/kendim/main/biz.png", title: 'February 30, 3024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},   
    { Image: "https://raw.githubusercontent.com/ErencanYlmz58/kendim/main/biz2.png", title: 'Ağustos 29, 2024', description: "Çiçekler gibi güzel, aşkımız gibi saf bir an... Ama en güzel çiçek her zaman yanımda. 💐❤️"},

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Resimlerimiz
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Geri dön
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture

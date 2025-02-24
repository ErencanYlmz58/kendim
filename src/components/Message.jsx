import React from 'react'
import {picture} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'
// Ağustos
function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: "https://raw.githubusercontent.com/ErencanYlmz58/kendim/main/biz3.png", title: 'Nisan 1, 2024', description: "Senin saçını bile düzeltirken kalbimi karıştırıyorum… Çünkü her dokunuşta, her anında sana biraz daha bağlanıyorum. En basit anlar bile seninle en özel hatıralara dönüşüyor. İyi ki varsın, iyi ki benimlesin. 💕✨"},   
    { Image: "https://raw.githubusercontent.com/ErencanYlmz58/kendim/main/biz4.png", title: 'Eylül 5, 3024', description: "Her aynaya baktığımda, en güzel yansımam sensin. Gittiğimiz her yerde değil, yanımda olduğunda tamamlanıyorum. Seninle her an, en güzel kareye dönüşüyor. 💫❤️📸"},

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Anılarımız
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

export default Message
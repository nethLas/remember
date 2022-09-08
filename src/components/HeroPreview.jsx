import React from 'react'
import { useNavigate } from "react-router-dom";

export function HeroPreview({ hero }) {
    const navigate = useNavigate()
    function openDetails() {
        navigate(`/${hero._id}`);
    }
  return (
    <div className="flex hero-card">
      <div>
        <img src={hero.imgUrl} alt="" />
      </div>
      <div className='flex column hero-info'>
        <h1>{hero.name}</h1>
        <h3>{hero.title}</h3>
        <p>{hero.story.slice(0, 500)}</p>
        <div className="btn-wrapper">
          <button onClick={() => openDetails()} className="nice-button">Continue Reading</button>
        </div>
      </div>
    </div>
  )
}

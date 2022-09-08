import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import {firebaseService} from '../services/firestore.service'

function HeroDetails() {
  const {id} = useParams()
  const [hero, setHero] = useState(null)
  useEffect(()=> {
    async function getHero() {
      setHero(await firebaseService.getEntityById(id))
      console.log(hero)
    }
    getHero()
  },[])
  if (!hero) return <div>Loading...</div>
  return (
    <div className="flex column hero-details">
    <div>
      <img src={hero.imgUrl} alt="" />
    </div>
    <div className="hero-info">
      <h1>{hero.name}</h1>
      <h3>{hero.title}</h3>
      <p>{hero.story}</p>
    </div>
  </div>
  );
}

export default HeroDetails;

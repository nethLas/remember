import React from "react";
import { useSelector } from 'react-redux'
import { HeroPreview } from "./HeroPreview";
function HeroList() {
  const heroes = useSelector(state => state.heroModule.heroes)

  if (!heroes) return <div>Loading</div>;
  return (
    <section className="hero-list flex column">
       {heroes.map(hero => (
        <HeroPreview hero={hero} key={hero._id} />
       ))}
    </section>
  );
}

export default HeroList;

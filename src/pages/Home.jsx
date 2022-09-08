import {React, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import HeroList from "../components/HeroList";
import {firebaseService} from '../services/firestore.service'

function Home() {
  const dispatch = useDispatch()
  let heroes
  useEffect(() => {
    async function getHeroes() {
      heroes = await firebaseService.queryData()
      dispatch({type: 'SET_HEROES', heroes})
    } 
    getHeroes()
  }, [])
  heroes = useSelector(state => state.heroModule.heroes)
  if (!heroes) return <div>Loading...</div>
  return (
    <>
      <HeroList />
    </>
  );
}

export default Home;

import { FC, useEffect } from "react";
import { useState } from "react"
import { uid } from "uid";

interface IPlanets{
  "id":number,
  "edited":string,
  "climate":string,
  "surface_water":string,
  "name":string,
  "diameter":string,
  "rotation_period":string,
  "created":string,
  "terrain":string,
  "gravity":string,
  "orbital_period":string,
  "population":string
}
interface ISetPlanet{
  setPlanet(planet:string):void,
  planet:string
}
const Planet: FC<ISetPlanet> = (props:ISetPlanet) => {
const [planets, setPlanets] = useState(['']);

useEffect(()=>{
  fetch('https://sw-info-api.herokuapp.com/v1/planets')
  .then((response)=>response.json())
  .then((data:IPlanets[])=>data.slice(0,7).map((item)=>item.name))
  .then(data=>setPlanets(data));
  
});
return (
    <select onChange={(e)=>props.setPlanet(e.target.value)} value={props.planet}>
       {planets.map((item)=>
      <option key={uid()}>{item}</option>)} 
    </select>
  )
}

export default Planet
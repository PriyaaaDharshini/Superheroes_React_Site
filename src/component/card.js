import React, { useContext } from 'react';
import {superheroinfo} from "./Info";
import "./carddetail.css";
import CardDetail from "./cardDetail";



 
const Card = (props)=>{
  const { data } = useContext(superheroinfo);
  
  return  (
  <div className="fetchdata">
  
  <div className="card">
  
          {data
            ? data.map((hero) => (
                <CardDetail data={hero} key={hero.url} />
              ))
            : <img src="https://images.hdqwalls.com/download/dc-cw-all-superheroes-gs-1920x1080.jpg" alt=""/>
          }
        </div>
  </div>);
}
export default Card;

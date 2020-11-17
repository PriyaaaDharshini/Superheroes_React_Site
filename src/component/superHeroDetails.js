import React from 'react';
import "./superHeroDetails.css"
import { Image } from 'antd';
import {Link} from "react-router-dom";


const SuperheroDetails = (props ) => {
    const dat =props.location.state;
    
    var image=dat.data.image;
    var powerstats=dat.data.powerstats;
    var work=dat.data.work;
    var connection=dat.data.connections;
    var appearance=dat.data.appearance;
    var biography=dat.data.biography;
  
    return (
       
        <div class="main">
                <Link to="/superheroes">Back</Link>
                
                <div id="left" style={{ float: "right", padding  : 10  } }>
             <Image align="center" width={500} height= {500} alt="Superhero Image" src={image.url}></Image> 
            
             </div>
                <div id="right"style={{ padding  : 10 }} >
                    
                    <h2>ID   :          {dat.data.id}</h2>
                    <h2>Full Name  :    {dat.data.name}</h2>
                    <h1>Powerstats </h1>
                    <p>Intelligence  : {powerstats.intelligence} </p> 
                    <p>Strength  :     {powerstats.strength} </p>
                    <p>Speed  :        {powerstats.speed} </p>
                    <p>Durability  :   {powerstats.durability} </p>
                    <p>Power  :        {powerstats.power} </p>
                    <p>Combat  :       {powerstats.combat} </p>

                </div>
                <div  style={{ padding  : 10 }}>
                    <h1>Appearance</h1>
                    <p>Gender  :       {appearance.gender} </p>
                    <p>Race  :         {appearance.race} </p>
                    <p>Height  :       {appearance.height} </p>
                    <p>Weight  :       {appearance.weight} </p>

                </div>
                <div  style={{ padding  : 10 }}>
                    <h1>Biography</h1>
                    <p>Aliases  :      {biography.aliases} </p>
                    <p>Publisher  :    {biography.publisher}</p>
                    <p>Alignment  :    {biography.alignment}</p>

                </div>
                <div  style={{ padding  : 10 }}>
                    <h1>Work  </h1>
                    <p>Occupation  :   {work.occupation}</p>
                    <p>Base   :         {work.base}</p>

                </div>
                <div  style={{ padding   : 10 }}>
                    <h1>Connections</h1>
                    <p>Relatives   :    {connection.relatives}</p>
                    
                </div>

       </div>
          
    );
}

export default SuperheroDetails;
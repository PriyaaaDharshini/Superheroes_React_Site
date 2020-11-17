import React,{useState,useEffect} from 'react'
import "./search.css";
import axios from "axios";
import {Input, Image} from "antd";
const { Search } = Input;


const SearchHeroes =()=>{
    const [data, setData] = useState();
    const [name, setName] = useState()
    const[searchdata, setSearch] = useState();
    useEffect(() => {
      axios
        .get(`https://www.superheroapi.com/api.php/103120028281050/search/${searchdata}`)
        .then(response => setData(response.data.results))
        .catch((error) => console.log(error));        
    }, [searchdata]);
     console.log(data)
    
    const handleclick=()=>{
        setSearch(name);
    }

return(
     <div >
        
      
  <Search
      align="center"
      placeholder="Search Superhero"     
      allowClear
      value={name}
      onChange={ e => setName(e.target.value) }
      onSearch={handleclick}
      
    />
  
  <div >

          {data
            ? data.map((singlehero) => (
                <SuperheroDetails data={singlehero} key={singlehero} />
              ))
            :         <img src="https://images.hdqwalls.com/download/dc-cw-all-superheroes-gs-1920x1080.jpg" alt=""/>
        }
        </div>
   </div>);
} 

const SuperheroDetails = ({data} ) => {
    
    var image=data.image;
    var powerstats=data.powerstats;
    var work=data.work;
    var connection=data.connections;
    var appearance=data.appearance;
    var biography=data.biography;
  
    return (
       
        <div className="property">
                
                <div id="left" style={{ float: "right", padding  : 10  } }>
             <Image align="center" width={400} height= {500} alt="Superhero Image" src={image.url}></Image> 
            
             </div>
                <div id="right"style={{ padding  : 10 }} >
                    
                    <h2>ID   :          {data.id}</h2>
                    <h2>Full Name  :    {data.name}</h2>
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

export default SearchHeroes;
import React, {createContext, useEffect, useState } from "react";
import axios from "axios";

export const superheroinfo = createContext();

 const Info = (props) => {
    const [data, setData] = useState();
     useEffect(() => {
      axios
        .get(`https://www.superheroapi.com/api.php/103120028281050/search/a`)
        .then((response) => {
          setData(response.data.results)
           })
        .catch((error) => console.log(error));
        console.log(data)
        
    }, []);


  return (<>
  <superheroinfo.Provider value={{data}}>{props.children}</superheroinfo.Provider>
  </>); 
  
  };




export default Info;
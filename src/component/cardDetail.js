import React from 'react';
import "./carddetail.css";
import {Link} from "react-router-dom"
import {  Avatar, Image} from 'antd';

import Meta from 'antd/lib/card/Meta';

const CardDetail =({data})=>{
  return (
    
      <div className="imageCard">
        <Meta
			avatar={<Avatar src={data.image.url} />}			
			title={data.name}
		/>
    <hr></hr>
	
  
       <Link to={{
         pathname: '/superhero/details',
         state: {data
         }
       }}>
        
        <Image align="center" width={200} height= {200} alt="Superhero Image" src={data.image.url}></Image> 
        </Link>
        
      </div>
    
    );
        

}
export default CardDetail;
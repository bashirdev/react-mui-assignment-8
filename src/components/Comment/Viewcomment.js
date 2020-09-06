import React, { useState, useEffect } from 'react';


const Viewcomment = (props) => {
  
    const {name, email, body, id} =props.comment;
    const [getImage, setImage] =useState([]);
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
       .then(res=> res.json())
       .then(data => setImage(data))
    },[id]);
    let images=getImage.url
    return (
        <div style={{border:'1px solid red', padding:'10px', margin:'5px'}}>
        <div > <img style={{height:'100px',  borderRadius:'50%' }} src={images} alt='' /></div>
       
            <h4>{name}</h4>
            <p>{email}</p>
            <div>
                {body} {id}
            </div>
        </div>
    );
};

export default Viewcomment;
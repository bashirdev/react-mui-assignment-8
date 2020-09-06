import React, { useState, useEffect } from 'react';
import PostDetail from '../PostDetail/PostDetail';
import Grid from '@material-ui/core/Grid';


const Home = () => {
  
     const [posts, setPost] =useState([]);
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data=> {
            setPost(data); 
        })

     },[])
    return (
        
 <Grid container 
     spacing={4}
     direction="row"
     justify="flex-space-between"
     display="flex-start"
     alignItems='center'
    > { posts.map(ps=><Grid item xs={12} sm={6} md={3}> <PostDetail posts={ps} key={ps.id}> </PostDetail></Grid> ) } 
           </Grid> 
    )
};

export default Home;
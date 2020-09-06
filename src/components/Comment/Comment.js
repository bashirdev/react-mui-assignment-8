import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Viewcomment from './Viewcomment';

const Comment = () => {
    
    const [comment, setComment] = useState([]);
    let{Postid} =useParams();
     
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${Postid}`)
        .then(res=> res.json())
        .then(data => {
            
           setComment(data);
        }).catch(err=> console.log(err))

    },[Postid]);

    return (
        <div>
            {comment.map(cm => <Viewcomment comment={cm} key={cm.id}></Viewcomment>)}
        </div>
    );
};

export default Comment;
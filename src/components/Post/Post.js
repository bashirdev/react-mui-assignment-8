import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Comment from '../Comment/Comment';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  

const Post = (props) => {

   
    const {Postid}=useParams();
    const [fetchPost, setComment] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${Postid}`)
        .then(res=> res.json())
        .then(data => {
            
           setComment(data);
           
        })

    },[Postid]);

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <>
     
     <Card className={classes.root}>
     <CardContent>
        <Typography variant="h4" color="textSecondary" component="h3">
        {fetchPost.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {fetchPost.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       <Button
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >See comments
          <ExpandMoreIcon />
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Comment key={Postid}></Comment>
      
        </CardContent>
      </Collapse>
    </Card>
    </>


    );
};

export default Post;


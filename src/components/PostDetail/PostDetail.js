import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActions,CardContent,Button,Typography } from '@material-ui/core';
import { Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height:'400px',
    margin:'5px',
   
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const PostDetail = (props) => {

    const classes = useStyles();

   const {title, body, id} =props.posts;

 return (
        <div>
        
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          date  will be here
         
        </Typography>
        <Typography variant="h5" component="h2">
           <h4>{title}</h4>
        </Typography>
        
        <Typography variant="body2" component="p">
         <p>{body}</p>
        </Typography>
      </CardContent>
      <CardActions>
    
      <Link to={"/PostDetail/" + id}><Button size="small">See more</Button></Link>
        
      </CardActions>
      
    </Card>
    </div>
    );
};

export default PostDetail;
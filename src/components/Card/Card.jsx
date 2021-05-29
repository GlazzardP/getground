import React from "react";
import styles from "./Card.module.scss";


// Material UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const BookCard = (props) => {
  const { book } = props;

  // const classes = useStyles();
  // const useStyles = makeStyles({
  //   root: {
  //     minWidth: 275,
  //   },
  //   bullet: {
  //     display: 'inline-block',
  //     margin: '0 2px',
  //     transform: 'scale(0.8)',
  //   },
  //   title: {
  //     fontSize: 14,
  //   },
  //   pos: {
  //     marginBottom: 12,
  //   },
  // });

  
  return (
    <Card>
      <CardContent>
        <Typography 
        // className={classes.title}
         color="textSecondary" gutterBottom>
          {book.book_title}
        </Typography>
        <Typography variant="h5" component="h2">
        {book.id}
        </Typography>
        <Typography 
        // className={classes.pos}
         color="textSecondary">
        {book.book_author}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default BookCard;

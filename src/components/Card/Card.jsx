import React from "react";
import styles from "./Card.module.scss";


// Material UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';



const BookCard = (props) => {
  const { book } = props;  

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

  }));

  const classes = useStyles();

  
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography 
         color="textSecondary" gutterBottom>
          {book.book_title}
        </Typography>
        <Typography variant="h5" component="h2">
        {book.id}
        </Typography>
        <Typography 
         color="textSecondary">
        {book.book_author}
        </Typography>
      </CardContent>

      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
          {/* <KeyboardArrowDownIcon /> */}
        </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          <Typography color="textSecondary">
            Year published: {book.book_publication_year}

          </Typography>
          <Typography color="textSecondary">
            Country published: {book.book_publication_country}
            City published: {book.book_publication_city}
          </Typography>
          <Typography color="textSecondary">
            Pages: {book.book_pages}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BookCard;

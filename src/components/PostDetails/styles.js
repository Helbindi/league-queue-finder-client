import { makeStyles } from '@material-ui/core/styles';
import background from '../../images/5v5.jpg';

export default makeStyles((theme) => ({
  media: {
    width: '100%',
    borderRadius: '20px',
    objectFit: 'cover',
  },
  card: {
    display: 'flex',
    width: '100%',
    color: 'white',
    borderRadius: '0.5em',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),
                      url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      flexDirection: 'column-reverse',
    },
  },
  section: {
    borderRadius: '0.5em',
    padding: '1em',
    marginBottom: '1em',
    flex: 1,
  },
  imageSection: {
    width: '50%',
    marginLeft: '20px',
    paddingTop: '1em',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 0,
      paddingTop: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    flexFlow: 'row wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  recommendedCards: {
    padding: '1em',
    margin: '1em',
    cursor: 'pointer',
    border: '2px solid black',
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '0.5em',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    color: 'black',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'scroll',
    marginRight: '1em',
    padding: '1em',
    width: '50%',
    background: '#F0F0F0',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
      marginBottom: '1em',
      width: '90%',
    },
  },
  commentsForm: {
    background: '#F0F0F0',
    padding: '1em',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  container: {
    borderRadius: '0.5em',
    margin: '1em 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paper: {
    background: '#F0F0F0',
    margin: '1em auto',
    padding: '1em',
    
  },
  divider: {
    margin: '20px 0',
    background: 'white',
  },
}));

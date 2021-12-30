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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      flexDirection: 'column-reverse',
    },
  },
  section: {
    borderRadius: '0.5em',
    margin: '1em',
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
    border: '1px solid yellow',
    padding: '1em',
    background: '#F0F0F0',
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
    background: 'white',
    border: '1px solid black',
    borderRadius: '0.5em',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
      marginBottom: '1em',
      width: '90%',
    },
  },
  commentsForm: {
    background: 'white',
    padding: '1em',
    width: '50%',
    border: '1px solid black',
    borderRadius: '0.5em',
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
    [theme.breakpoints.down('sm')]: {
      paddingRight: '1em',
    },
  },
  paper: {
    background: '#F0F0F0',
    margin: '1em auto',
    padding: '1em 0',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  divider: {
    margin: '20px 0',
    background: 'white',
  },
  message: {
    fontWeight: 800,
    wordBreak: 'break-all',
    maxWidth: '700px',
    margin: '0 auto',
    padding: '0 1em',
  },
}));

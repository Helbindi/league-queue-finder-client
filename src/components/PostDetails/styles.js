import { makeStyles } from '@material-ui/core/styles';
import background from '../../images/5v5.jpg';
import background2 from '../../images/vi.jpg';

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
    borderTopLeftRadius: '0.5em',
    borderTopRightRadius: '0.5em',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      flexDirection: 'column-reverse',
    },
  },
  section: {
    wordBreak: 'break-word',
    borderRadius: '0.5em',
    margin: '1em',
    marginBottom: '1em',
    padding: '3em 1em',
    textAlign: 'center',
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
    padding: '1em',
    background: '#f2f2f2',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center',

    },
  },
  commentsInnerContainer: {
    textAlign: 'left',
    height: '200px',
    overflowY: 'scroll',
    marginRight: '1em',
    padding: '1em',
    width: '50%',
    background: 'white',
    border: '2px solid black',
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
    border: '2px solid black',
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
    background: 'white',
    border: '2px solid black',
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
    textAlign: 'center',
    fontWeight: 800,
    wordBreak: 'break-all',
    maxWidth: '50ch',
    margin: '0 auto',
    padding: '0 1em',
  },
  recommended: {
    wordBreak: 'break-word',
    padding: '2em',
    textAlign: 'center',
    flex: 1,

    borderBottomLeftRadius: '0.5em',
    borderBottomRightRadius: '0.5em',

    // background: '#f2f2f2',
    color: 'white',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}));

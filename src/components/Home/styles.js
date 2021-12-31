import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    margin: '1rem 0',
    display: 'flex',
    padding: '1em',
  },
  buttonSubmit: {
    marginBottom: '0.5em',
  },
  pagination: {
    borderRadius: 5,
    margin: '1.5em auto',
    padding: '1em',
    maxWidth: '500px',
  },
  gridContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-0.8em',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
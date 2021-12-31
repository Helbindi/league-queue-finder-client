import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  main: {
    margin: '1em auto',
    padding: '1em',
    borderRadius: '15px',
    maxWidth: '800px'
  },
  alert: {
    background: '#CC0000',
    color: 'white',
    margin: '1em auto',
    padding: '1em',
    borderRadius: '15px',
    maxWidth: '300px',
  },
  root: {
  '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginBottom: '0.5em',
  },
}));
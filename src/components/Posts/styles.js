import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    borderRadius: 15,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-0.7em',
    },
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  // [theme.breakpoints.down('sm')]: {
  //   appBar: {
  //     padding: '10px 20px',
  //   },
  //   heading: {
  //     display: 'none',
  //   },
  //   userName: {
  //     display: 'none',
  //   },
  //   image: {
  //     marginLeft: '5px',
  //   },
  //   toolbar: {
  //     display: 'flex',
  //     justifyContent: 'flex-end',
  //     width: '160px',
  //   },
  // },

  actionDiv: {
    textAlign: 'center',
  },
}));

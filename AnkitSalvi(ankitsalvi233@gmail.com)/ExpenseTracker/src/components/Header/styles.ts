import makeStyles from '@material-ui/core/styles/makeStyles'


const useStyles = makeStyles({
  root: {
    display:'flex',
    justifyContent:'center',
    marginBottom:'3rem',
    paddingTop:'0.8rem',
    paddingBottom:'0.8rem',
    boxShadow: '1px 10px #888888',
    background:'#3f51b5',
  },
  text: {
    padding: '1.5rem',
    color: 'white',
    fontSize:'1.4rem',
    fontWeight:'bold'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  }
})

export default useStyles

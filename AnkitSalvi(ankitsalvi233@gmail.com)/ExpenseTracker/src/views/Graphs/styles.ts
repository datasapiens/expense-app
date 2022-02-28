import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  text:{
    fontSize:'1.6rem',
    margin: 'auto',
    marginBottom:'2rem',
    marginTop:'3rem'
  },
  container: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    height: '1000px',
    paddingTop:'8rem',
    width:'80%'
  },
  boldText:{
      fontSize:'3rem',
      marginTop:'8rem'
  },
  mainContainer:{
    display: 'flex',
    justifyContent:'center'
  }
}))

export default useStyles

import { colors } from './../../utils/constants';
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto !important',
    height: '50px',
    margin:'10px',
    '& active': {
      color: 'blue',
    }
  },
  appBarLink: {
    textDecoration: 'none',
    fontSize: '1.1rem',
    color: 'black',
    marginRight: '10px',
    borderBottom: `1px solid transparent`,
    marginTop: '-10px',
    transition: 'all .3s',
    '&:hover, &:focus': {
      color: colors.redSecondary,
      borderBottom: `1px solid ${colors.redSecondary}`,
    }
  },
  linkActive: {
    color: colors.redSecondary,
    borderBottom: `1px solid ${colors.redSecondary}`,
  },
  toolbar: {
    borderRadius: '50px 50px 0 0',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minHeight:'100px !important',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -20,
    left: 0,
    right: 0,
    margin: '0 auto',
    color: colors.greenPrimary,
  },
  paper:{
    marginTop:'5%',
    marginBottom:'5%',
    paddingTop:'3rem',
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
  },
  text:{
    marginTop:'1rem',
  }
}))

export default useStyles

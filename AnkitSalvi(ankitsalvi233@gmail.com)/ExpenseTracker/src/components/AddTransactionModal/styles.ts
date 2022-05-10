import { colors } from './../../utils/constants';
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  dialogContent: {
    width: '75%',
    margin: '0 auto',
    marginBottom: '1rem',
  },
  dialogActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '1.5rem',
    width: '70%',
    margin: '0 auto',
  },
  confirmButton: {
    background: colors.greenPrimary,
    border: `1px solid ${colors.greenPrimary}`,
    marginLeft: '1rem',
    '& span': {
      color: 'white',
    },
    '&:hover span': {
      color: colors.greenPrimary,
    }
  },
  cancelButton: {
    fontSize: '0.8rem',
    border:'1px solid black',
    backgroundColor: 'gray',
    color:'white'
  },
})

export default useStyles

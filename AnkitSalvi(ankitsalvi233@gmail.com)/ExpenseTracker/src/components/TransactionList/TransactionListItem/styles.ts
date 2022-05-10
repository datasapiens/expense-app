import makeStyles from '@material-ui/core/styles/makeStyles'
import { colors } from '../../../utils/constants'

const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: '0 auto',
    padding: '1rem',
    '& .deleteBtn': {
      opacity: '0',
      position: 'absolute',
      cursor: 'pointer',
      left: '-15px',
      borderRadius: '4px',
      border: `1px solid ${colors.greenPrimary}`,
      background: colors.greenPrimary,
      color: 'white',
      padding: '2px 6px',
      transition: 'opacity 0.2s ease-in',
    },
    '&:hover .deleteBtn': {
      opacity: '1',
    },
  },
  redBorder: {
    borderRight: `0.5rem solid ${colors.redPrimary}`,
  },
  greenBorder: {
    borderRight: `0.5rem solid ${colors.greenPrimary}`,
  },
})

export default useStyles

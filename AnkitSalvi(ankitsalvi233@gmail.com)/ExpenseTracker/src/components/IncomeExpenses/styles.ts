import makeStyles from '@material-ui/core/styles/makeStyles'
import { colors } from '../../utils/constants'

const useStyles = makeStyles({
  container: {
    padding: '.5rem',
    marginTop: '1rem',
    display: 'flex',
    flexDirection:'column'
  },
  valueContainer: {
    flexGrow: 1,
    padding: '0.55rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'1rem'
  },
  divider: {
    height: '50px',
    backgroundColor: '#222',
  },
  incomeHeading: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: colors.greenPrimary,
    letterSpacing: '1px',
  },
  expenseHeading: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: colors.redPrimary,
    letterSpacing: '1px',
  },
})

export default useStyles

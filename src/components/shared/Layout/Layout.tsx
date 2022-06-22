import Header from "../Header/Header"
import './Layout.scss'
import loadingSpinner from '../../../assets/Spinner.svg'
import { useSelector } from "react-redux"
import { InitialState } from "../../../redux/initial-state.model"

const Layout = ({ children }: any) => {
  const isLoadingCategories = useSelector((state: InitialState) => state.categoriesState?.isLoading);
  const isLoadingTransactions = useSelector((state: InitialState) => state.transactionState?.isLoading);
  const isLoadingDashboard = useSelector((state: InitialState) => state.dashboardState?.isLoading);

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      {
        (isLoadingCategories || isLoadingDashboard || isLoadingTransactions) && (
          <div className="overlay">
            <img src={loadingSpinner} alt="Loading..." />
          </div>
        )
      }
    </>
  )
}

export default Layout;
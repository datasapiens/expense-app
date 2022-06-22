import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getCategories } from "../../components/categories/categories.actions";
import { balanceByMonthAction, incomeByCategories, outcomeByCategories } from "../../components/dashboard/dashboard.actions";
import Card from "../../components/shared/Card/Card";
import Layout from "../../components/shared/Layout/Layout";
import PieChartComponent from "../../components/shared/PieChartComponent/PieChartComponent";
import { getTransactions } from "../../components/transactions/transactions.actions";
import { InitialState } from "../../redux/initial-state.model";
import './DashboardPage.scss'

const DashboardPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: InitialState) => state.categoriesState?.categories);
  const transactions = useSelector((state: InitialState) => state.transactionState?.transactions);
  const incomeByCategoriesData = useSelector((state: InitialState) => state.dashboardState?.incomeByCategoriesData);
  const outcomeByCategoriesData = useSelector((state: InitialState) => state.dashboardState?.outcomeByCategoriesData);
  const balanceByMonthData = useSelector((state: InitialState) => state.dashboardState?.balanceByMonthData);

  const dashboardClassName = 'dashboard-page';
  const pageHeaderClassName = 'page-header';


  useEffect(() => {
    if (!categories || (categories && !categories.length)) {
      dispatch(getCategories());
      dispatch(getTransactions());
    }

    if (categories && categories.length && transactions && transactions.length) {
      const hasIncome = transactions.find((transaction) => transaction.amount > 0);
      const hasOutcome = transactions.find((transaction) => transaction.amount < 0);
      if (hasIncome) {
        dispatch(incomeByCategories());
      }
      if (hasOutcome) {
        dispatch(outcomeByCategories());
      }
      dispatch(balanceByMonthAction());
    }
  }, [categories, transactions, dispatch]);

  const NoData = (isIncome: boolean) => <p>
    No data for this graph. Please, go to <Link to={'/home'}>Home</Link> and register some transactions to see the {isIncome ? 'Income' : 'Outcome'} by category graph.
  </p>

  return (
    <Layout>
      <div className={pageHeaderClassName}>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard. Here you can find some graphs related to your expenses.</p>
      </div>
      <div className={dashboardClassName}>
        <Card Title={<><span style={{ color: 'green' }}>Income</span> by category</>}>
          <div style={{ width: '570px', height: '300px' }}>
            {
              incomeByCategoriesData && incomeByCategoriesData.length ? (
                <PieChartComponent data={incomeByCategoriesData} />
              )
                :
                NoData(true)
            }
          </div>
        </Card>
        <Card Title={<><span style={{ color: 'red' }}>Outcome</span> by category</>}>
          <div style={{ width: '570px', height: '300px' }}>
            {
              outcomeByCategoriesData && outcomeByCategoriesData.length ? (
                <PieChartComponent data={outcomeByCategoriesData} />
              )
                :
                NoData(false)
            }
          </div>
        </Card>
        {
          balanceByMonthData && balanceByMonthData.length ? (
            <Card Title={<><span className='primary'>Balance</span> by month</>}>
              <div style={{ width: '570px', height: '400px' }}>
                <ResponsiveContainer>
                  <BarChart width={1100} height={250} data={balanceByMonthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="balance" fill="#8884d8">
                      {
                        balanceByMonthData.map(({ date, balance }, index) => <Cell key={`${balance}-cell--${index}`} fill={balance > 0 ? 'green' : 'red'} />)
                      }
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          ): null
        }
      </div>
    </Layout>
  )
}

export default DashboardPage;
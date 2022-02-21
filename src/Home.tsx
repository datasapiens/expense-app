import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddExpense from './components/AddExpense';
import CategoryList from './components/CategoryList';
import { actionCreators, State } from './redux';
import { Expense } from './redux/reducers/expenseReducer';

const Home:React.FC = () => {

  const dispatch = useDispatch();

  const {addExpense, addCategory, removeCategory} = bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state: State)=>state)

  const [expenses, setExpenses] = useState(state.expense['expenseList']);
  const [amount, setAmount] = useState(state.expense['totalAmount']);
  const [categories, setCategories] = useState(state.category['categoryList']);

  const handleAddCategory = (category: string) => {
    addCategory(categories.length, category)
    setCategories(state.category['categoryList'])
  }

  const handleRemoveCategory = (category: number) => {
    removeCategory(category);
    setCategories(state.category['categoryList'])
  }

  const handleAddExpense = (expense: Expense) => {
    addExpense(state.expense.expenseList.length, expense.category, expense.description, expense.time, expense.amount);
    setExpenses(state.expense.expenseList);
    setAmount(state.expense.totalAmount);
  }
  const expenseList = expenses.map((expense) => {
    let categoryName = '';
    categories.forEach(category=>{
      if(category.id === expense.category){
        categoryName = category.category;
      }
    })
    return(<li>
      <div className='expenses'>
        <div>{expense.description}</div>
        <div>{categoryName}({expense.time})</div>
        <div> ${expense.amount}</div>
      </div>
    </li>)
  });
  return (
    <div>
      <div className="header-amount">Total Amount Available: ${amount}</div>
      <CategoryList
        categories={categories}
        addCategory={handleAddCategory}
        removeCategory={handleRemoveCategory}
      />
      <AddExpense categories={categories} addExpense={handleAddExpense} />

      <div className='div'>
        {expenses.length > 0 && <a href="/graph" className="button">
          See it in graph
        </a>}
      </div>
      <div className="div">
        <ul className="ul">{expenseList}</ul>
      </div>
    </div>
  );
}

export default Home;

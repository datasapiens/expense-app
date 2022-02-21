import React, {useState} from 'react'
import { Category } from '../redux/reducers/categoryReducer';

const AddExpense: React.FC<{
  categories: Category[];
  addExpense: any;
}> = (props) => {

  const [amount, setAmount] = useState();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const addExpenseHandler = (e:any) => {
    e.preventDefault();
    (selectedCategory >= 0 && date.trim().length > 0 && selectedCategory !== -1 && description.trim().length > 0) && props.addExpense({category:selectedCategory, description:description, time:date, amount:amount})
  }

  const amountChangeHandler = (e:any) => {
    setAmount(e.target.value);
  } 

  const categoryChangeHandler = (e: any) => {
    setSelectedCategory(+e.target.value);
  }

  const dateChangeHandler = (e:any) => {
    setDate(e.target.value);
  }

  const descriptionChangeHandler = (e:any) => {
    setDescription(e.target.value);
  }

  const options = props.categories.map(category=><option value={category.id} key={category.id}>{category.category}</option>)
  return (<div className='div'>
    <form onSubmit={addExpenseHandler}>
      <select onChange={categoryChangeHandler} value={selectedCategory} className='select'>
        <option value={-1} selected>Please select a category</option> 
        {options}
      </select>
      <input type='text' value={description} onChange={descriptionChangeHandler} className='input' placeholder="Please describe transaction"/>
      <input type='date' value={date} onChange={dateChangeHandler} className='input'/>
      <input type='number' value={amount} onChange={amountChangeHandler} className='input' placeholder='Please enter amount'/>
      <input type='submit' className='button' value='Add'/>
    </form>
  </div>);
};

export default AddExpense
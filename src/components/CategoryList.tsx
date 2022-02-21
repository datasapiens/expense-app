import React, {useState} from 'react'
import { Category } from '../redux/reducers/categoryReducer';

const CategoryList:React.FC<{categories:Category[], addCategory:any, removeCategory:any}> = (props) => {
  const [categoryName, setCategoryName] = useState('');
  const handleSubmit = (e: any):void => {
    e.preventDefault();
    categoryName.trim().length > 0 && props.addCategory(categoryName);
    setCategoryName('');
  }; 
  const handleCategoryNameChange = (e:any) => {
    setCategoryName(e.target.value);
  }
  const list = props.categories.map(category=><li key={category.id}>{category.category}<button onClick={()=>props.removeCategory(category.id)} className='button'>X</button></li>)
  return (
    <div className="div">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Please enter category name' onChange={handleCategoryNameChange} value={categoryName} className='input'/>
        <button type='submit' className='button'>Create Category</button>
      </form>
      <ul className='ul'>{list}</ul>
    </div>
  );
}

export default CategoryList
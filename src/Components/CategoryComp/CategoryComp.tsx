import React from 'react';
import { useSelector } from 'react-redux';
import { CategoriesList } from '../../common/CategoryList/CategoriesList';
import '../../sass/Pages/categories.scss';


export const CategoryComp = () => {
  const {categoryReducer} = useSelector((store:any)=>store);

  return (
    
    <div className="category__content_item_container">
         <h3 className='category_header'>Categories</h3>
         <div className='category__content_item_list'>
            {categoryReducer.length && categoryReducer.map((category:any,i:any)=>
                <CategoriesList key={i} label={category.label}/>
            )}
         </div> 
    </div>  
  )
}
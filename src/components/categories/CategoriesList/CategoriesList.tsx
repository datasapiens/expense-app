import { useDispatch } from "react-redux";
import { Category } from "../../../redux/initial-state.model";
import Button from "../../shared/Button/Button";
import { getTransactions } from "../../transactions/transactions.actions";
import { removeCategoryAction } from "../categories.actions";
import './CategoriesList.scss';


const CategoriesList = ({ categories }: { categories: Category[]}) => {
  const listItemClassName = 'list-item';
  const dispatch = useDispatch();

  const removeCategory = (category_id: string) => {
    dispatch(removeCategoryAction(category_id));
    dispatch(getTransactions());
  }

  return (
    <div>
      {
        categories.map((category, index) => 
          <div className={listItemClassName} key={`categories-list-${index}`}>
            <span style={{color: category.color? category.color: '000'}}>{category.label}</span>
            {
              category.removable && (
                <Button text="Remove Category" buttonStyle={'outline-secondary'} onClickHandler={() => removeCategory(category.category_id as string)} />
              )
            }
          </div>
        )
      }
    </div>
  )

}

export default CategoriesList;
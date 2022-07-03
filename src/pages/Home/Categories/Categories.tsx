import Card from '../../../components/Card/Card';
import CategoriesTable from './CategoriesTable/CategoriesTable';
import CategoryForm from './CategoryForm/CategoryForm';

const Categories = () => {
  return (
    <Card header="Categories">
      <CategoriesTable />
      <CategoryForm />
    </Card>
  );
};

export default Categories;

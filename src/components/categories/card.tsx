import { Card } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { removeCategory } from "../../slices/categoryslice";

const { Meta } = Card;

const CategoryCard: React.FC<any> = (props): JSX.Element => {
  const dispatch = useDispatch();


  function deleteTransaction(category: any): void {
    dispatch(removeCategory(category.id));
  }

  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <CloseOutlined key='delete' twoToneColor="#eb2f96" onClick={() => deleteTransaction(props.category)} />
      ]}
    >
      <Meta
        title={props.category.label}
      />
    </Card>
  );
}

export default CategoryCard

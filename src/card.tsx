import { Card } from "antd";
import { CloseOutlined } from '@ant-design/icons';
const { Meta } = Card;

const CategoryCard: React.FC<any> = (props): JSX.Element => {
  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <CloseOutlined key='delete' />
      ]}
    >
      <Meta
        title="Category"
        description={props.category.label}
      />
    </Card>
  );
}

export default CategoryCard
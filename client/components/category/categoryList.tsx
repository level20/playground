import { Tag } from "antd";
import { Category } from "../../models/category";

interface CategoryListProps {
  categories: Category[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div>
      {categories.map((category, i) => (
        <Tag key={i} color={category.color}>
          {category.title}
        </Tag>
      ))}
    </div>
  );
};

export { CategoryList };

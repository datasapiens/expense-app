import React, { useState } from "react";

type Props = {
  saveCategory: (category: Category | any) => void;
};

const Index: React.FC<Props> = ({ saveCategory }) => {
  const [category, setCategory] = useState<Category | {}>();

  const handleCategoryData = (e: React.FormEvent<HTMLInputElement>) => {
    setCategory({
      ...category,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveCategory(category);
  };

  return (
    <form onSubmit={addNewArticle}>
      <input type="text" id="label" placeholder="Label" onChange={handleCategoryData} />
      <button disabled={category === undefined ? true : false}>Add Category</button>
    </form>
  );
};

export default Index;

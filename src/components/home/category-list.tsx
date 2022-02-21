import React, { useEffect, useState, useRef } from 'react';
import { Tag, Input, Tooltip } from 'antd';
import {
  addCategory,
  deleteCategory,
  getCategories,
} from '../../reducers-actions';

import './category.scss';

const CategoryList = ({
  setUpdate,
  update,
}: {
  setUpdate: any;
  update: any;
}) => {
  const [categoryList, setCategoryList] = useState([]);

  const getCat = getCategories();

  useEffect(() => {
    setCategoryList(getCat?.map((item: any) => item.label));
  }, [update]);

  const [tag, setTag] = useState({
    categories: [''],
    inputVisible: false,
    inputValue: '',
    editInputIndex: -1,
    editInputValue: '',
  });

  //const categoryNames = categoryList?.map((item: any) => item.label);

  const inputRef = useRef<any>();
  const myRefs = useRef<any>();

  useEffect(() => {
    inputRef.current?.focus();
    myRefs.current?.focus();
  }, [tag]);

  const handleClose = (removedTag: string) => {
    const newCategories = tag.categories.filter(
      (item: any) => item !== removedTag
    );
    setTag({ ...tag, categories: newCategories });
    deleteCategory(removedTag);
  };

  const showInput = () => {
    setTag({ ...tag, inputVisible: true });
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTag({ ...tag, inputValue: e.currentTarget.value });
  };

  const handleInputConfirm = () => {
    if (tag.inputValue && tag.categories.indexOf(tag.inputValue) === -1) {
      const newCategories = [...tag.categories, tag.inputValue];
      addCategory(tag.inputValue);
      setTag({
        ...tag,
        categories: newCategories,
        inputVisible: false,
        inputValue: '',
      });
      setUpdate((prevState: any) => !prevState);
    }
  };

  return (
    <div className='category-list'>
      {(
        categoryList || ['Other', 'Payroll', 'Overhead', 'Transportation']
      )?.map((item: string, index: number) => {
        const isLongTag = item.length > 20;
        const tagElem = (
          <Tag
            className='edit-tag'
            key={item}
            closable={index != 0}
            onClose={() => handleClose(item)}
          >
            <span
              onDoubleClick={(e) => {
                myRefs.current?.[index].focus();
                if (index !== 0) {
                  setTag({
                    ...tag,
                    editInputIndex: index,
                    editInputValue: item,
                  });

                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${item.slice(0, 20)}...` : item}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={item} key={item}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}

      {tag.inputVisible && (
        <Input
          ref={inputRef}
          type='text'
          size='small'
          className='tag-input'
          value={tag.inputValue}
          onChange={handleInputChange}
          onBlur={() => setTag({ ...tag, inputValue: '', inputVisible: false })}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!tag.inputVisible && (
        <Tag
          className='site-tag-plus'
          onClick={() => {
            showInput();
            inputRef.current?.focus();
          }}
        >
          + New Category
        </Tag>
      )}
    </div>
  );
};

export default CategoryList;

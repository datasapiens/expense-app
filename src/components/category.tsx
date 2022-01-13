import {
  Button,
  Divider,
  FormGroup,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import storageService from "../service/storageService";
import { v4 as uuidv4 } from "uuid";

interface iFormValues {
  label: string;
}

export const Category = (props: any) => {
  const { categories, updateCategories } = props;
  const { register, handleSubmit, reset } = useForm<iFormValues>();

  const deleteCat = (id: number) => {
    let getItem = storageService.getItem("categories") || "[]";
    let getItemArray = JSON.parse(getItem);
    let itemIndex = getItemArray?.findIndex((x: { id: number }) => x.id === id);
    getItemArray.splice(itemIndex, 1);
    updateCategories(getItemArray);
  };

  const onSubmit: SubmitHandler<any> = (data) => {
    const id = uuidv4();
    const newCategory = {
      id,
      ...data,
    };
    updateCategories([...categories, newCategory]);
    reset();
  };

  return (
    <>
      <Paper elevation={3} className="p-5 h-100">
        <h4 className="pb-3">Categories</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-8">
              <FormGroup>
                <TextField
                  id="add-category"
                  label="Add Category"
                  variant="standard"
                  fullWidth
                  {...register("label", { required: true, maxLength: 20 })}
                />
              </FormGroup>
            </div>
            <div className="col-4 d-flex align-items-end">
              <Button type="submit" variant="contained" className="w-100">
                Add
              </Button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-lg-12">
            <List className="pt-3" dense={true}>
              {categories?.map((category: any, index: number) => (
                <div key={index}>
                  <Divider />
                  <ListItem
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => {
                          deleteCat(category.id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={category.label} />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </div>
        </div>
      </Paper>
    </>
  );
};

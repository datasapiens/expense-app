import React, { useEffect, useState } from "react";
import { FormGroup } from "reactstrap";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import ExpenseTable from "./expenseTable";
import { Category } from "./category";
import storageService from "../service/storageService";
import { v4 as uuidv4 } from "uuid";
import Select from "react-select";

interface iFormValues {
  id?: number;
  label: string;
  date: string;
  amount: number;
  transactionType: string;
  category: string;
  transactions: Array<any>;
}
interface iCategories {
  id?: number;
  label: string;
}

const preCategories = [
  {
    id: 0,
    label: "Salary",
  },
  {
    id: 1,
    label: "Gifts",
  },
  {
    id: 2,
    label: "Food",
  },
  {
    id: 3,
    label: "Going Out",
  },
  {
    id: 4,
    label: "Travelling",
  },
];

export const Expense = () => {
  const { register, handleSubmit, control, reset, resetField } =
    useForm<iFormValues>();

  const [transactions, setTransactions] = useState<iFormValues>(
    JSON.parse((storageService.getItem("transactions") || "[]") as string)
  );
  const [categories, setCategories] = useState<iCategories>(
    JSON.parse(
      (storageService.getItem("categories") ||
        JSON.stringify(preCategories)) as string
    )
  );

  const onSubmit: SubmitHandler<iFormValues> = (data) => {
    const id = uuidv4();
    const newTransaction = {
      id,
      ...data,
      date: new Date().toLocaleDateString(),
    };
    storageService.setItem(
      "transactions",
      // @ts-ignore: Unreachable code error
      JSON.stringify([...transactions, newTransaction])
    );
    // @ts-ignore: Unreachable code error
    setTransactions([...transactions, newTransaction]);
    reset();
    resetField("category");
  };

  const updateCategories = (data: iCategories) => {
    setCategories(data);
    storageService.setItem("categories", JSON.stringify(data));
  };

  const updateTransactions = (data: any) => {
    setTransactions(data);
    storageService.setItem("transactions", JSON.stringify(data));
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-8">
            <Paper elevation={3} className="p-5 h-100">
              <h4 className="pb-3">Add Transaction</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="expense-form">
                  <div className="row">
                    <div className="col-lg-8">
                      <FormGroup>
                        <TextField
                          id="standard-basic"
                          label="Trasaction Name"
                          variant="standard"
                          fullWidth
                          {...register("label", {
                            required: true,
                          })}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-lg-4">
                      <FormGroup>
                        <TextField
                          id="standard-basic"
                          label="Transaction Amount"
                          variant="standard"
                          fullWidth
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                          }}
                          {...register("amount", {
                            required: true,
                            maxLength: 20,
                          })}
                        />
                      </FormGroup>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8">
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="gender"
                          defaultValue="expense"
                          row
                        >
                          <FormControlLabel
                            value="expense"
                            control={<Radio />}
                            label="Expense"
                            {...register("transactionType")}
                          />
                          <FormControlLabel
                            value="income"
                            control={<Radio />}
                            label="Income"
                            {...register("transactionType")}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="col-lg-4">
                      <FormControl fullWidth>
                        <Controller
                          name={"category"}
                          control={control}
                          render={({ field }) => (
                            <Select
                              placeholder="Category"
                              {...field}
                              // @ts-ignore: Unreachable code error
                              options={categories}
                            />
                          )}
                        />
                      </FormControl>
                    </div>
                  </div>
                </div>
                <Button type="submit" variant="contained" className="mt-4">
                  Submit
                </Button>
              </form>
            </Paper>
          </div>
          <div className="col-lg-4">
            <Category
              categories={categories}
              updateCategories={updateCategories}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <ExpenseTable
              transactions={transactions}
              updateTransactions={updateTransactions}
            />
          </div>
        </div>
      </div>
    </>
  );
};

import { Category } from "../interfaces/category.interface";
import { Transaction } from "../interfaces/transaction.interface";
import { getCategoryById } from "./getCategoryById";



 export const incomeAndCategoryData = (transactions: Transaction[], categories: Category[]) => {
    const labels: string[] = []
      categories.filter(c => labels.push(c.label));
      const labelAndIncome: any[] = [];
      transactions.forEach((tx) => {
        if (tx) {
          labelAndIncome.push({
            label: getCategoryById(tx.categoryId!, categories)?.label || "N/A",
            amount: tx.amount,
            type: tx.type
          })
        }
      })
    
    
    const incomeLabels: any[] = []; 
    labelAndIncome.forEach((label) => {
      if (label.type === 'income')
      incomeLabels.push(label.label)
    });
    const income: any[] =[];
    
    labelAndIncome.forEach((label) => {
      if (label.type === 'income') {
        income.push(label.amount)
      }
      
    });
    return {
        labels: [...incomeLabels],
    datasets: [
      {
        label: '# of Votes',
        data: [...income],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
    }
    
  };

  export const expensesAndCategoryData = (transactions: Transaction[], categories: Category[]) => {
      const labelAndExpenses: any[] = [];
      transactions.forEach((tx) => {
        if (tx) {
          labelAndExpenses.push({
            label: getCategoryById(tx.categoryId!, categories)?.label || "N/A",
            amount: tx.amount,
            type: tx.type
          })
        }
      })
    
    
    const labels: any[] = []; 
    labelAndExpenses.forEach((label) => {
      if (label.type === 'expenses')
      labels.push(label.label)
    });
    const expenseData: any[] =[];
    
    labelAndExpenses.forEach((label) => {
      if (label.type === 'expenses') {
        expenseData.push(label.amount)
      }
      
    });
    return {
        labels: [...labels],
    datasets: [
      {
        label: '# of Votes',
        data: [...expenseData],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
    }
    
  };
import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSE = [
  {
    id: 'e1',
    title : 'Toilet Paper',
    amount: 250.36,
    date: new Date(2021, 6, 14),
  },
  {
    id: 'e2',
    title : 'Car Insurance',
    amount: 350.36,
    date: new Date(2018, 6, 14),
  },
  {
    id: 'e3',
    title : 'new TV',
    amount: 250.36,
    date: new Date(2020, 6, 14),
  },
  {
    id: 'e4',
    title : 'Study Table',
    amount: 250.36,
    date: new Date(2022, 6, 14),
  },
]

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSE);


  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses]
    })
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

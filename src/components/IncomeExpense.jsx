import { useContext } from "react";
import TaskList from "./TaskList";
import { Card, CardTitle } from "./ui/card";
import { TaskContext } from "@/context/TaskContext";

export default function IncomeExpense() {
  const { tasks } = useContext(TaskContext);

  const amounts = tasks.map((task) => task.amount);

  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="flex items-center flex-col">
      <div className="flex justify-between w-96">
        <h2 className="text-2xl">Your balance:</h2>
        <h1 className="text-4xl">#{balance}</h1>
      </div>
      <Card className="w-96 my-4 flex justify-around py-4">
        <div className="flex flex-col ">
          <CardTitle className="text-xl ">INCOME</CardTitle>
          <p className="text-lg text-green-300">#{Math.abs(income)}</p>
        </div>
        <div className="border"></div>
        <div className="flex flex-col ">
          <CardTitle className="text-xl">Expense</CardTitle>
          <p className="text-lg text-red-300">#{Math.abs(expense)}</p>
        </div>
      </Card>

      <TaskList />
    </div>
  );
}

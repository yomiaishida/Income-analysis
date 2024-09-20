import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <>
      <TaskProvider>
        <div>
          <Header />
          <IncomeExpense />
          <AddTask />
        </div>
      </TaskProvider>
    </>
  );
}

export default App;

import ExpenseForm from "./ExpenseForm";

export default function AddTask() {
  return (
    <div className="w-96 sm:mt-10 flex flex-col m-auto sm:m-0 ">
      <h3 className="text-start mb-2">Add New Task</h3>
      <div className="w-full flex justify-center">
        <hr className="w-full" />
      </div>

      <ExpenseForm />
    </div>
  );
}

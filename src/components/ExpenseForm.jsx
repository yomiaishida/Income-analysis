import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { TaskContext } from "@/context/TaskContext";
import { useContext } from "react";

export default function ExpenseForm() {
  const { addTask } = useContext(TaskContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addTask(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-start space-y-2 my-4">
        <div>
          <Label>
            Task
            <Input
              type="text"
              className="rounded"
              {...register("task", { required: true })}
            />
            {errors.task && <p className="text-red-400">Please add a task</p>}
          </Label>
        </div>

        <div>
          <Label>
            Amount
            <Input
              type="number"
              className="rounded"
              {...register("amount", { required: true, valueAsNumber: true })}
            />
            {errors.amount && (
              <p className="text-red-400">Please add an amount</p>
            )}
          </Label>
        </div>
      </div>
      <Button
        className="bg-green-400 w-full hover:border rounded hover:border-green-400"
        type="submit"
      >
        Add Task
      </Button>
    </form>
  );
}

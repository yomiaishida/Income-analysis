import { useContext } from "react";
import { Badge } from "./ui/badge";
import { TaskContext } from "@/context/TaskContext";
import { Button } from "./ui/button";

export default function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <div className="w-96 justify-center flex flex-col m-auto mt-4">
      <h3 className="text-start mb-2">History</h3>
      <div className="w-full flex justify-center">
        <hr className="w-full" />
      </div>

      <ul>
        {tasks.map((task) => (
          <li className="flex items-center " key={task.id}>
            <Button className="bg-red-400" onClick={() => deleteTask(task.id)}>
              X
            </Button>
            <Badge className="py-2 my-4 border-white w-full border-r-4 border-r-red-500 flex justify-between text-base">
              <span>{task.task} </span>
              <span>{task.amount} </span>
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

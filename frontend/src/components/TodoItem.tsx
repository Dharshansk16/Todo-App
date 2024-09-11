import { todo } from "node:test";
import React from "react";

type TodoItemProps = {
  id: number;
  task_name: string;
  status: boolean;
  created_on: string;
};

function TodoItem({ todoItem }: { todoItem: TodoItemProps[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>sl.no</th>
            <th>Task</th>
            <th>Status</th>
            <th>Created On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoItem.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.task_name}</td>
              <td>{item.status ? "Completed" : "Pending"}</td>
              <td>{item.created_on}</td>
              <td>Actions</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TodoItem;

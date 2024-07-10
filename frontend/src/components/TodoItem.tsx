import { todo } from "node:test";
import React from "react";

interface TodoItemProps {
  task_name: string;
  status: boolean;
  created_on: string;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task_name,
  status,
  created_on,
}) => {
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
          <tr>
            <th>1</th>
            <td>{task_name}</td>
            <td>{status ? "Completed" : "Pending"}</td>
            <td>{created_on}</td>
            <td>Actions</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TodoItem;

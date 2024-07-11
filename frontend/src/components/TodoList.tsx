import React from "react";
import TextYellow from "./styles/TextYellow";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div className="container px-8 m-8">
      <div className="mb-8">
        <h1 className="text-4xl">
          Welcome to <TextYellow text="LazyList" /> <br />
        </h1>
        <h2 className="text-xl">
          Your Ultimate
          <TextYellow text="To-Do" /> Companion
        </h2>
      </div>
      <div>
        <TodoItem task_name="random_name" status={true} created_on="10/2/24" />
      </div>
    </div>
  );
}

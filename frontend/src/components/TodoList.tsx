"use client";
import React, { useEffect, useState } from "react";
import TextYellow from "./styles/TextYellow";
import TodoItem from "./TodoItem";
import { ACCESS_TOKEN } from "@/app/_constants/constants";

type TodoItemType = {
  id: number;
  task_name: string;
  status: boolean;
  created_on: string;
};

export default function TodoList() {
  const [todoList, setTodoList] = useState<TodoItemType[] | []>([]);
  const apiUrl = "http://127.0.0.1:8000/api/todo/";

  useEffect(() => {
    handleFetch();
  }, []);
  async function handleFetch() {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    console.log(accessToken);
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const todoItems = await response.json();
    if (todoItems.length > 0) {
      setTodoList(todoItems);
      console.log(todoItems);
    }
  }
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
        <TodoItem todoItem={todoList} />
      </div>
    </div>
  );
}

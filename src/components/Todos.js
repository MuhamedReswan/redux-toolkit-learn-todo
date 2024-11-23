import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoslice";
import { useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log("toddsfs", todos);
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <div
          className="flex justify-center items-center bg-gray-500 w-[33%] mx-auto border rounded-md"
          key={todo.id}
        >
          {todo.text}
          <div>
            <span className="flex">
              {" "}
              <FaEdit className="ms-2 text-blue-800" />{" "}
              <MdDeleteForever
                className=" ms-2 text-red-600 w-4 h-4"
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todos;

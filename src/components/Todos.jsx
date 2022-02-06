/** @format */

import { TodoInput } from "./TodosInput";

export const Todos = () => {
  return (
    <div className="col-sm-6 my-3 p-3 shadow-sm mx-auto " >
    <h1 className="title text-center">Todo...</h1>
      <TodoInput />
    </div>
  );
};

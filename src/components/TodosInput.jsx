/** @format */

import { useState, useEffect } from "react";
import { TodosList } from "./TodosList";
import "../App.css";

export const TodoInput = ({ handleData }) => {
  const [text, settext] = useState("");
  const [body, setbody] = useState("");
  const [Todos, setTodos] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const deleteTodo = (id) => {
    fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then(getData);
  };

  const getData = () => {
    setLoading(true);
    fetch(`http://localhost:3001/users?_page=${page}&_limit=4`)
      .then((d) => d.json())
      .then((res) => {
        setTodos(res);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="form-group col-sm-9 ">
          <input
            type="text"
            className="inputTitle form-control form-control-lg"
            placeholder="Add Todo"
            onChange={(e) => {
              settext(e.target.value);
            }}
          />
          <input
            type="text"
            className="inputBody form-control form-control-lg"
            placeholder="Add Task..."
            onChange={(e) => {
              setbody(e.target.value);
            }}
          />
        </div>
        <div className=" col-sm-3 d-grid">
          <button
            className="addBtn btn btn-success btn-lg"
            onClick={() => {
              const data = { title: text, body: body };

              fetch("http://localhost:3001/users", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "content-type": "application/json",
                },
              }).then(getData);
            }}
          >
            Add
          </button>
        </div>
      </div>

      <div className="container mt-4 p-3">
        {Loading ? (
          <h1 className="text-center">Loading...</h1>
        ) : (
          Todos.map((e) => (
            <TodosList title={e.title} id={e.id} deleteTodos={deleteTodo} />
          ))
        )}
      </div>

      <div>
        <button
          disabled={page <= 1 ? true : false}
          className="prev btn btn-sm btn-primary"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
          disabled={page > Todos.length ? true : false}
          className="btn btn-sm btn-primary m-2"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

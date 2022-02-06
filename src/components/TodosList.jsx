/** @format */

export const TodosList = ({ title, id, deleteTodos }) => {
  return (
    <div className="todoItem row shadow p-4 mb-3 bg-body rounded ">
      <div className="col-8 ">
        <h5 className="text-left">{title}</h5>
      </div>
      <div className="col-4 d-flex flex-row-reverse">
        <button
          className="btn btn-sm btn-outline-danger "
          onClick={() => deleteTodos(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

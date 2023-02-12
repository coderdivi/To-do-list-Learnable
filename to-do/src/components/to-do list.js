import React from "react";

const TodoList = ({ tasks, setTasks, setEditTask}) => {
  const handleComplete = (task) => {
    setTasks(tasks.map((item)=>{
      if (item.id === task.id) {
        return {...item,completed:!item.completed}
      }
      return item
    })
    )
  };

  const handleEdit=({id})=>{
    const findTask = tasks.find((task) =>task.id===id);
    setEditTask(findTask)
  }
  const handleDelete = ({ id }) => {
    setTasks(tasks.filter((task)=>task.id !==id));
  };

  return (
    <div>
      {tasks.map(function (task) {
        return (
          <li
            className="list-item"
            key={task.id}
          >
            <input
              type="text"
              value={task.title}
              className={'list $ {task.completed ? "complete" : ""}'}
              onChange={(event) => event.preventDefault()}
            />
            <div>
              <button className="button-complete task-button"  onClick={() => handleComplete(task)}>
                <i className="fa-solid fa-circle-check"></i>
              </button>
              <button className="button-edit task-button" onClick={()=> handleEdit(task)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                className="button-delete task-button"
                onClick={() => handleDelete(task)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;

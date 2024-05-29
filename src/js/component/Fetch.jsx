import React, { useEffect, useState } from "react";

export const Fetch = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]); //me ayude un poco con el video y le deje el nombre

  const sincronizar = async () => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/todo/users/matischlegel"
      );

      if (response.ok == false) {
        throw new Error("Levante un error");
      }

      const data = await response.json();
      setTasks(data.todos); // el .todos significa que estamos accediendo al array
    } catch (error) {
      console.log("cath error: ", error);
    }
  };

  const getUserAgain = async () => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/todo/users/matischlegel",
        {
          method: "POST",
          body: JSON.stringify([]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok == false) {
        throw new Error("Levante un error");
      }
    } catch (error) {
      console.log("cath error: ", error);
    }
  };

  const addTask = async (todo) => {
    try {
      console.log(todo);
      const responseAddTaks = await fetch(
        "https://playground.4geeks.com/todo/todos/matischlegel",
        {
          method: "POST",
          body: JSON.stringify(todo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (responseAddTaks.ok == false) {
        throw new Error("Levante un error en addTasks");
      }

      const dataAddTasks = await responseAddTaks.json();
      setTasks([...tasks, dataAddTasks]);
    } catch (error) {
      console.log("cath error addTaks: ", error);
    }
  };

  const eliminarTask = async (id) => {
    try {
      const responseDeleteTask = await fetch(
        "https://playground.4geeks.com/todo/todos/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (responseDeleteTask.ok == false) {
        throw new Error("Levante un error en deleteTask");
      }
    } catch (error) {
      console.log("cath error deleteTask: ", error);
    }
  };

  const clearTasks = async () => {
    try {
      const responseClearTask = await fetch(
        "https://playground.4geeks.com/todo/users/matischlegel",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (responseClearTask.ok == false) {
        throw new Error("Levante un error en clearTask");
      }

      setTasks([]);
      getUserAgain();
    } catch (error) {
      console.log("error del clearTask: ", error);
    }
  };

  useEffect(() => {
    sincronizar();
  }, []);

  return (
    <React.Fragment>
      <h1>Todos</h1>
      <div className="container">
        <div className="list">
          <ul>
            <li>
              <input
                type="text"
                placeholder="What needs to be done?"
                onChange={(event) => {
                  setInputValue(event.target.value); // accedes al valor que dispara el evento
                }}
                value={inputValue} // muestra el valor de inputValue
                onKeyDown={(event) => {
                  //cuando precionas cierta tecla se ejecuta la funcion
                  if (event.key == "Enter") {
                    if (inputValue.trim() == "") {
                      alert(
                        "No se pueden mandar espacios en blancos!!, escribe una tarea!!"
                      );
                    } else {
                      setTasks([
                        ...tasks,
                        {
                          label: inputValue, //preguntar (¿convierte el valor, es decir lo que ingresamos en in string, para que sea posible y que no haya ningun error?)
                          is_done: false,
                        },
                      ]); //actualiza dicho estado con un nuevo array que contiene los anteriores
                      setInputValue(""); // para borrar cuando tocas enter
                      addTask({
                        label: inputValue,
                        is_done: false,
                      });
                    }
                  }
                }}
              />
            </li>
            <li style={{ display: tasks.length > 0 ? "none" : "block" }}>
              <strong>No hay tareas agrega una!!</strong>
            </li>
            {tasks.map((task, index) => (
              <li key={index} className="containerLi">
                {task.label}
                <button
                  type="reset"
                  onClick={() => {
                    const deleteTask = tasks.filter((list) => list !== task);
                    setTasks(deleteTask);
                    eliminarTask(task.id);
                  }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
        <p>{tasks.length + " item left"}</p>
      </div>
      <div className="stick"></div>
      <div className="stick2"></div>
      <button
        className="buttonDeleteAll btn btn-danger"
        type="reset"
        onClick={clearTasks}
      >
        delete all
      </button>
    </React.Fragment>
  );
};

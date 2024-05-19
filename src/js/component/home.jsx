import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [tasks, setTasks] = useState([]); //me ayude un poco con el video y le deje el nombre
	return (
		<React.Fragment>
				<h1>Todos</h1>
			<div className="container">
					<div className="list">
						<ul>
							<li key={tasks.id}>
								<input 
								type="text" 
								placeholder="What needs to be done?"
								onChange={(event) => {
									setInputValue(event.target.value) // accedes al valor que dispara el evento
								}}
								value={inputValue} // muestra el valor de inputValue
								onKeyDown={(event) => { //cuando precionas cierta tecla se ejecuta la funcion
									if (event.key == "Enter") {
										if (inputValue.trim() == "") {
											alert("No se pueden mandar espacios en blancos!!, escribe una tarea!!")
										} else {
										setTasks([...tasks, inputValue]); //actualiza dicho estado con un nuevo array que contiene los anteriores
										setInputValue("") // para borrar cuando tocas enter
										  }	
									} 
								}}
								/>
							</li>
							<li style={{ display: tasks.length > 0 ? 'none' : 'block' }}>
								<strong>No hay tareas agrega una!!</strong>
							</li>
							{tasks.map((task, index) => (
							<li key={index} className="containerLi">
								{task} 
								<button
								type="reset"
								onClick={(event) => {
									const deleteTask = tasks.filter((list) => list !== task)
									setTasks(deleteTask)
								}}
								>
									X
								</button>
							</li>
							))}
						</ul>
					</div>
					<p>
					{tasks.length + " item left"}
					</p>			
			</div>
			<div className="stick"></div>
			<div className="stick2"></div>
		</React.Fragment>
	);
};

export default Home;

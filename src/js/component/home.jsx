import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [tasks, setTasks] = useState([]); //me ayude un poco con el video y le deje el nombre
	return (
		<React.Fragment>
				<h1>tasks</h1>
			<div className="container">
					<div className="list">
						<ul>
							<li>
								<input 
								type="text" 
								placeholder="What needs to be done?"
								onChange={(event) => {
									setInputValue(event.target.value) // accedes al valor que dispara el evento
								}}
								value={inputValue} // muestra el valor de inputValue
								onKeyDown={(event) => { //cuando precionas cierta tecla se ejecuta la funcion
									if (event.key == "Enter") {
										setTasks([...tasks, inputValue]); //actualiza dicho estado con un nuevo array que contiene los anteriores
										setInputValue("") // para borrar cuando tocas enter
									}
								}}
								/>
							</li>
							{tasks.map((task) => (
							<li className="containerLi">
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

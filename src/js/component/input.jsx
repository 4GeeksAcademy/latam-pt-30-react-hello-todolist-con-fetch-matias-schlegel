import React, { useState } from "react";

//No pude agregarlo en el home.jsx para hacerlo más organizado

export const Input = () => {
    const [inputValue, setInputValue] = useState("") 
	const [todos, setTodos] = useState([]); //me ayude un poco con el video y le deje el nombre
 return ( <input 
		type="text" 
		placeholder="What needs to be done?"
		onChange={(event) => {
			setInputValue(event.target.value) // accedes al valor que dispara el evento
								}}
		value={inputValue} // muestra el valor de inputValue
		onKeyDown={(event) => { //cuando precionas cierta tecla se ejecuta la funcion
        if (event.key == "Enter") {
			setTodos([...todos, inputValue]); //actualiza dicho estado con un nuevo array que contiene los anteriores
			setInputValue("") // para borrar cuando tocas enter
			}
		}}
	/>
 )
}
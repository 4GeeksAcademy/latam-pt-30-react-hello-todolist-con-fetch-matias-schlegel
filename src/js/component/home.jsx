import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [firstSubmit, setFirstSubmit] = useState("")
	return (
		<React.Fragment>
			<div className="container vh-100">
				<h1>todos</h1>
				<h1>{firstSubmit}</h1>
					<div className="list">
						<ul>
							<li>
								<input 
								type="text" 
								placeholder="What needs to be done?"
								onChange={(event) => {
									setFirstSubmit(event.target.value)
								}}
								value={firstSubmit}
								onKeyDown={(event) => {
									if (event.key == "Enter") {
										setFirstSubmit("")
									}
								}}
								/>
							</li>
							<li>hola <i class="fa fa-times"></i> </li>
						</ul>
					</div>
					<button
						type="reset"
						onClick={(event) => {
							setFirstSubmit("")
						}}
					>X</button>
			</div>
		</React.Fragment>
	);
};

export default Home;

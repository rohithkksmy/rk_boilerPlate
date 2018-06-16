import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

const Header = () => ({
	render(){
		return (
			<div className = "header">
				<h1>RK BoilerPlate</h1>
			</div>
		);
	} 
});

export default Header;
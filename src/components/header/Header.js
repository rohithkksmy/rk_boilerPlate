import React from "react"; // eslint-disable-line no-unused-vars

import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

const Header = (props) => ({
	handleAuthor() {
		console.log("props---->",props);
		props.history.push("/About");
	},

	render(){
		return (
			<div className = "header">
				<h1 onClick = {this.handleAuthor.bind(this)}>{this.props.headerText}</h1>
			</div>
		);
	} 
});

export default Header;
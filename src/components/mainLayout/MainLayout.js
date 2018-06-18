import React from "react"; // eslint-disable-line no-unused-vars
import Header from "../header/Header"; // eslint-disable-line no-unused-vars
import Footer from "../footer/Footer"; // eslint-disable-line no-unused-vars
import "./mainLayout.css";

const MainLayout = props => ({
	render() {
		console.log("main props---->",props);
		return (
			<div className="App">
				<Header headerText = "RK Boilerplate" { ...props.children.props }/>
				{/* The routes is specific only to containers  which is the child of the main tag , so passed the
				above props to header to route from the header component*/}
				<div className = "mainLayout">
					<main>{props.children}</main>
				</div>
				<Footer />
			</div>
		);
	}
});

export default MainLayout;
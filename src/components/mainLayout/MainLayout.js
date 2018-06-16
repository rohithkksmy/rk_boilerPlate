import React from "react"; // eslint-disable-line no-unused-vars
import Header from "../header/Header"; // eslint-disable-line no-unused-vars
import Footer from "../footer/Footer"; // eslint-disable-line no-unused-vars
import "./mainLayout.css";

const MainLayout = props => ({
	render() {
		return (
			<div className="App">
				<Header />
				<div className = "mainLayout">
					<main>{props.children}</main>
				</div>
				<Footer />
			</div>
		);
	}
});

export default MainLayout;
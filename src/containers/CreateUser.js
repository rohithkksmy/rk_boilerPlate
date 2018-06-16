import React from "react";
import { connect } from "react-redux";
import { addUser} from "../actions/userActions";
import "bootstrap/dist/css/bootstrap.min.css";

@connect((store) => {
	return {
		users: store.user.users
	};
})

export default class CreateUser extends React.Component {
	constructor(){
		super();
		this.state = {
			firstName:"",
			lastName:"",
			aboutMe:""
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitUser = this.submitUser.bind(this);
	}
	submitUser () {
		this.props.dispatch(addUser(this.state));

	}
	handleChange (e) {
		this.setState({[e.target.name]: e.target.value});
	}
	render() {
		return (
			<div>
				<h2>Create User </h2>
				<div className = "row">
					<div className = "col-xs-2">First Name : </div>
					<div className = "col-xs-2"><input type = "text" name = "firstName" onChange = {this.handleChange}/></div>  
				</div>
				<div className = "row">
					<div className = "col-xs-2">Last Name : </div>
					<div className = "col-xs-2" ><input type = "text" name = "lastName" onChange = {this.handleChange}/></div>  
				</div>
				<div className = "row">
					<div className = "col-xs-2"> About Me : </div>
					<div className = "col-xs-2"><textarea  name = "aboutMe" onChange = {this.handleChange}></textarea></div>  
				</div>
				<button className = "btn btn-danger" onClick = {this.submitUser}> Submit User</button>
			</div>
		);
	}
}
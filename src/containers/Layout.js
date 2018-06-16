import React from "react";
import { connect } from "react-redux";
import { fetchUsers} from "../actions/userActions";
import "bootstrap/dist/css/bootstrap.min.css";

@connect((store) => {
	return {
		users:store.user.users,
	};
})

export default class Layout extends React.Component {
	componentWillMount() {
		this.props.dispatch(fetchUsers());
	}

	handleClick = () => {
		this.props.history.push("/createUser");
	}

	createUserDiv(users){
		let indents = [];
		users.map((item,index) => {
			indents.push(<div key = {index}>
				<div class="card">
					<div class="card-body">
						<h4 class="card-title">{item.firstName} {item.lastName}</h4>
						<p class="card-text">{item.aboutUser}</p>
					</div>
				</div>
			</div>);
		});
		return indents;
	}

	render() {
		let usersTemplate;
		if(this.props.users.length){
			usersTemplate = this.createUserDiv(this.props.users);
		}else {
			usersTemplate = <div>No Users Found</div>;
		}

		return (
			<div>
				<button className= "btn btn-primary" onClick = {this.handleClick.bind(this)}>Create User</button>
				{this.props.children}
				<div>{usersTemplate}</div>
			</div>
		);
	}
}

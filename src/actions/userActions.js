import axios from "axios";
import dbConstant from "../db/dbConstants";
import dummyUrls from "../db/dummyUrls";

let dbVariable = dbConstant.dbConnection ? null : dummyUrls;

export function fetchUsers() {
	return function (dispatch){
		axios({
			method:"get",
			url:dbConstant.baseUrl + dbVariable.getUsers
		}).then((resp) => {
			dispatch({type:"FETCH_USERS",payload:resp.data});
		}).catch(() => {
		});
	};
}

export function addUser(user) {
	return function(dispatch){
		axios({
			method: "post",
			url: dbConstant.baseUrl + dbVariable.create,
			data: {
				firstName: user.firstName,
				lastName: user.lastName,
				aboutUser: user.aboutMe
			}
		}).then((resp) => {
			dispatch({type: "ADD_USER", payload: resp});
		}).catch(() => {
		}); 
	};
}

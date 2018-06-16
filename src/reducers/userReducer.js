export default function reducer(state={
	users:{}
}, action) {
  
	switch (action.type) {
	case "ADD_USER": {
		return {
			...state,
			users: action.payload
		};
	}

	case "FETCH_USERS": {
		return {
			...state,
			users: action.payload
		};
	}
	}

	return state;
}
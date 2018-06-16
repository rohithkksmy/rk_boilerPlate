import Home from "../containers/Home";
import About from "../containers/About";
import CreateUser from "../containers/CreateUser";

import Layout from "../containers/Layout";

const routes = [
	{ path: "/",
		exact: true,
		component: Layout
	},
	{ path: "/home",
		exact: true,
		component: Home
	},
	{
		path:"/About",
		exact: true,
		component: About
	},
	{
		path:"/createUser",
		exact: true,
		component: CreateUser
	}
];

export default routes;
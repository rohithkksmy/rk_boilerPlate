import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom"; // eslint-disable-line no-unused-vars
import { matchRoutes, renderRoutes } from "react-router-config"; // eslint-disable-line no-unused-vars
import { BrowserRouter } from "react-router-dom"; // eslint-disable-line no-unused-vars
import { Switch } from "react-router"; // eslint-disable-line no-unused-vars
import { Provider } from "react-redux"; // eslint-disable-line no-unused-vars
import store from "./store"; // eslint-disable-line no-unused-vars
import routes from "./routes"; // eslint-disable-line no-unused-vars
import MainLayout from "./components/mainLayout/MainLayout"; // eslint-disable-line no-unused-vars

const App =  document.getElementById("app");

export default App;

ReactDOM.render(
	<Provider store={store}>
		<MainLayout>
			<BrowserRouter>
				<Switch>
					{renderRoutes(routes)}
				</Switch>
			</BrowserRouter>
		</MainLayout>                 
	</Provider>, 
	App);

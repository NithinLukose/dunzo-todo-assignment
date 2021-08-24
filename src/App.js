import logo from "./logo.png";
import "./App.css";
import { connect } from "react-redux";
import TodoContainer from "./components/TodoContainer";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="Container">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
			</header>
			<div className="Container">
				<div className="App-Content">
					<TodoContainer />
				</div>
			</div>
		</div>
	);
}

export default connect()(App);

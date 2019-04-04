import React, { Component } from "react";
import SideBar from "./components/sidebar";
import "./App.css";
import "./typebase.css";
import Primary from "./components/primary";

class App extends Component {
	render() {
		return (
			<main className="body">
				<SideBar />
				<Primary />
			</main>
		);
	}
}

export default App;

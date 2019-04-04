import React, { Component } from "react";
import SideBar from "./components/sidebar";
import "./App.css";
import "./typebase.css";

class App extends Component {
	render() {
		return (
			<main className="body">
				<SideBar />
				<section className="main">
					<header id="header" />

					<article id="education" />

					<article id="experience" />

					<section id="references" />
				</section>
			</main>
		);
	}
}

export default App;

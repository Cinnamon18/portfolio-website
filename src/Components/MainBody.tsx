import React from "react";
import { Component } from "react";
import GameList from "./GameList";

export default class MainBody extends Component {


	render(): JSX.Element {
		return (
			<div>
				<GameList />
			</div>
		);
	}
}

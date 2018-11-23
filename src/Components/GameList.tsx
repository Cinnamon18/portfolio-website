import { Component } from "react";

class GameList extends Component {

	private gameList: Game[] = [
		GameList.pathToHarmony,
	]


	render(): JSX.Element[] {
		return (
			this.gameList
		);
	}

	private static pathToHarmony: Game = {

	}
}

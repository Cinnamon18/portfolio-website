import React from "react";
import { Component } from "react";
import Game, { IGameProps } from "./Game";
import styles from './GameList.module.scss';

export default class GameList extends Component {

	private gameListProps: IGameProps[] = [
		GameList.pathToHarmony,
	]

	render(): JSX.Element[] {
		return (
			this.gameListProps.map(gameProps => React.createElement(Game, gameProps, null))
		);
	}

	private static readonly pathToHarmony: IGameProps = {
		description: [
			"Lead a team of 20 to create a turn based tactics game",
			"asdf",		
		],
		link: {
			destination: "vgdev.org"
		},
		preview: {

		},
		date: "December 2018",
		name: "Path to Harmony",
		key: "1",
	};
}

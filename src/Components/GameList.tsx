import React from "react";
import { Component } from "react";
import Game, { IGameProps } from "./Game";
import styles from './GameList.module.scss';

export default class GameList extends Component {

	private gameListProps: IGameProps[] = [
		GameList.pathToHarmony,
		GameList.dreamworld,
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
			destination: "https://github.com/Cinnamon18/PathToHarmony/Builds"
		},
		preview: {
			media: [

			]
		},
		date: "December 2018",
		name: "Path to Harmony",
		key: "1",
	};

	private static readonly dreamworld: IGameProps = {
		description: [
			"created environmetn art",
			"asdf",
		],
		link: {
			linkText: "Play Online",
			destination: "https://revengeracer.itch.io/dreamworld"
		},
		preview: {
			media: [
				// { isVideo: false, src: "dreamworldVideo.mp4", previewImg: "dreamworld1.png"}
				// { isVideo: false, src: "dreamworld1.png"},
				// { isVideo: false, src: "dreamworld2.png"},
			]
		},
		date: "June 2017",
		name: "Dreamworld",
		key: "2",
	};
}

import React from "react";
import { Component } from "react";
import Game, { IGameProps } from "./Game";
// import dreamworld1 from "../assets/dreamworld1.png";
// import dreamworld2 from "../assets/dreamworld2.png";
// import dreamworldVideo from "../assets/dreamworldVideo.mp4";
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
		],
		link: {
			destination: "https://github.com/Cinnamon18/PathToHarmony/tree/master/Builds"
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
			"Created environment art",
		],
		link: {
			linkText: "Play Online",
			destination: "https://revengeracer.itch.io/dreamworld"
		},
		preview: {
			media: [
				// { isVideo: false, src: dreamworldVideo, previewImg: dreamworld1},
				// { isVideo: false, src: dreamworld1},
				// { isVideo: false, src: dreamworld2},
			]
		},
		date: "June 2017",
		name: "Dreamworld",
		key: "2",
	};
}

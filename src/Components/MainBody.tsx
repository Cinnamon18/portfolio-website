import React from "react";
import { Component } from "react";
import GameList from "./GameList";
import styles from './MainBody.module.scss';

export default class MainBody extends Component {


	render(): JSX.Element {
		return (
			<div className={styles.GameListHolder}>
				<GameList />
			</div>
		);
	}
}

import React from "react";
import { Component } from "react";
import { Button } from "@material-ui/core";
import styles from './Header.module.scss';

export interface IHeaderProps {
	resumeLink: string;
}

export default class Header extends Component<IHeaderProps> {

	render(): JSX.Element {
		return (
			<div>
				<h2>Alice Kalok</h2>
				<ul className={styles.HeaderList}>
					<li>(415)-562-0259</li>
					<li>alice.ava.moh@gmail.com</li>
					<div className={styles.Links}>
						<Button
							variant="outlined"
							color="primary"
							onClick={() => { window.open(this.props.resumeLink) }}
						>
							Resume
						</Button>
					</div>
				</ul>
			</div>
		);
	}

}

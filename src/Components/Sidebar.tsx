import React from "react";
import { Component } from "react";
import { Button } from "@material-ui/core";


export interface ISidebarProps {
	resumeLink: string;
}

export default class Sidebar extends Component<ISidebarProps> {

	render(): JSX.Element {
		return (
			<div>
				<p>Alice Kalok</p>
				<p>(415)-562-0259</p>
				<p>alice.ava.moh@gmail.com</p>
				<Button
					variant="outlined"
					onClick={() => {window.open(this.props.resumeLink)}}
				>
					<p>Resume</p>
				</Button>
			</div>
		);
	}

}

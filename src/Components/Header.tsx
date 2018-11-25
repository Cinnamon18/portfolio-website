import React from "react";
import { Component } from "react";
import { Button } from "@material-ui/core";


export interface IHeaderProps {
	resumeLink: string;
}

export default class Header extends Component<IHeaderProps> {

	render(): JSX.Element {
		return (
			<div>
				<h2>Alice Kalok</h2>
				<ul className="HeaderList">
					<li>(415)-562-0259</li>
					<li>alice.ava.moh@gmail.com</li>
					<div className="Links">
						<Button
							variant="outlined"
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

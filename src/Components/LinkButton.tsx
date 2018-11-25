import React from "react";
import { Component } from "react";
import { Button } from "@material-ui/core";
import styles from './LinkButton.module.scss';

export interface ILinkButtonProps {
	linkText?: string;
	destination: string;
}

export default class LinkButton extends Component<ILinkButtonProps> {

	static readonly DEFAULT_TEXT = "Download";

	render(): JSX.Element {

		let linkText: string = (this.props.linkText) ? this.props.linkText : LinkButton.DEFAULT_TEXT;

		return (
			<Button variant="contained" href={this.props.destination}>
				<p>{linkText}</p>
		  	</Button>
		);
	}
}

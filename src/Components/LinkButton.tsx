import { Component } from "react";
import { Button } from "@material-ui/core";

class LinkButton extends Component {

	static readonly DEFAULT_TEXT = "Download";

	private linkText: string;
	private destination: string;

	public LinkButton(
		destination: string,
		linkText?: string,
	) {
		this.destination = destination;
		this.linkText = (linkText) ? linkText : LinkButton.DEFAULT_TEXT;
	}

	render(): JSX.Element {
		return (
			<Button variant="contained" href={this.destination} className={classes.button}>
				<p>{this.linkText}</p>
		  	</Button>
		);
	}
}

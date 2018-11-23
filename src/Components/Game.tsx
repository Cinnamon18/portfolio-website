import { Component } from "react";

class Game extends Component {

	private description: string[];
	// private tags?: Tag[]; //I may come back to the idea of tags. or not!
	private link: LinkButton;
	private preview: GamePreview[]; //Media preview 
	private date: string;
	private name: string;

	public Game(
		description: string[],
		link: LinkButton,
		preview: GamePreview, 
		date: string,
		name: string
	) {
		this.description = description;
		this.link = link;
		this.preview = preview;
		this.date = date;
		this.name = name;
	}



	render(): JSX.Element {
		return (
			<p></p>
		);
	}
}

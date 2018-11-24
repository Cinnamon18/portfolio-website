import React, { Component } from "react";
import LinkButton, { ILinkButtonProps } from "./LinkButton";
import GamePreview, { IGamePreviewProps } from "./GamePreview";

export interface IGameProps {
	description: string[];
	// private tags?: Tag[]; //I may come back to the idea of tags. or not!
	link: ILinkButtonProps;
	preview: IGamePreviewProps; //Media preview. Screen shots, trailers, gameplay, etc.
	date: string;
	name: string;
}

export default class Game extends Component<IGameProps> {

	render(): JSX.Element {
		return (
			<p></p>
		);
	}
}

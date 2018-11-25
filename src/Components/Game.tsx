import React, { Component } from "react";
import LinkButton, { ILinkButtonProps } from "./LinkButton";
import GamePreview, { IGamePreviewProps } from "./GamePreview";
import { Grid } from "@material-ui/core";

export interface IGameProps {
	description: string[];
	// private tags?: Tag[{]; //I may come back to the idea of tags. or not!
	link: ILinkButtonProps;
	preview: IGamePreviewProps; //Media preview. Screen shots, trailers, gameplay, etc.
	date: string;
	name: string;
	key: string;
}

export default class Game extends Component<IGameProps> {

	render(): JSX.Element {
		return (
			<Grid
				container
				className="Game"
				direction="row"
				justify="center"
				alignItems="flex-start"
				spacing={16}
			>
				<Grid item xs={8}>
					<GamePreview
						{...this.props.preview}
					/>
				</Grid>
				<Grid item xs={4}>
					<Grid
						container
						direction="row"
						justify="space-between"
						alignItems="flex-start"
						className="GameDescription"
					>
						<Grid className="GameName" item xs={8}>
							<p >{this.props.name}</p>
						</Grid>
						<Grid className="GameDate" item xs={4}>
							<p >{this.props.date}</p>
						</Grid>
						<Grid className="GameDescription" item xs={12}>
							<ul>
								{this.props.description.map(desc => <li>{desc}</li>)}
							</ul>
							<LinkButton
								{...this.props.link}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

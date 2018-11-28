import React from "react";
import { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import styles from './GamePreview.module.scss';
import defaultImage from "../assets/defaultGamePreview.png";
const Player = require('video-react');


export interface IGamePreviewMedia {
	isVideo: boolean;
	src: string;
	previewImg?: string;
}

export interface IGamePreviewProps {
	media: IGamePreviewMedia[];
}

export default class GamePreview extends Component<IGamePreviewProps> {

	// private static readonly defaultImage: string = "assets/defaultGamePreview.png";

	render(): JSX.Element {
		return (
			<Carousel
				emulateTouch={true}
				showStatus={false}
				infiniteLoop={true}
				transitionTime={500}
			>
				{this.props.media ?
					this.props.media.map((media) => {
						media.isVideo ?
						<Player
							src={media.src}
							poster={media.previewImg}
						/>
						:
						<div>
							<img src={media.src}/>
						</div>
					})
					:
					<div>
						<img src={defaultImage} />
					</div>
				}

			</Carousel>
		);
	}
}

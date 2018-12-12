import React from "react";
import { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import styles from './GamePreview.module.scss';
import defaultImage from "../assets/defaultGamePreview.png";
import { Player } from 'video-react';

export interface IGamePreviewMedia {
	isVideo: boolean;
	src: string;
	previewImg?: string;
}

export interface IGamePreviewProps {
	media: IGamePreviewMedia[];
}

export default class GamePreview extends Component<IGamePreviewProps> {

	render(): JSX.Element {

		return (
			<Carousel
				emulateTouch={true}
				showStatus={false}
				infiniteLoop={true}
				transitionTime={500}
			>
				{
					this.props.media.length == 0 ?
						<div>
							<img src={defaultImage} />
						</div>
						:
						this.props.media.map((mediaItem) => {
							return (
								mediaItem.isVideo ?
									<Player
										poster={mediaItem.previewImg}
										src={mediaItem.src}
									/>
									:
									<div>
										<img src={mediaItem.src} />
									</div>
							);
						})
				}
			</Carousel>
		);
	}
}

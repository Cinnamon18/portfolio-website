import { Component } from "react";

class Sidebar extends Component {

	//TODO
	private static readonly RESUME_LINK = "";

	render(): JSX.Element {
		return (
			<div>
				<p>Alice Kalok</p>
				<p>(415)-562-0259</p>
				<p>alice.ava.moh@gmail.com</p>
				<Button
					variant="outlined"
					className={classes.button}
					onClick={() => {window.open(Sidebar.RESUME_LINK)}}
				>
					<p>Resume</p>
				</Button>
			</div>
		);
	}

}

import React from "react";
import YouTube from "react-youtube";

class VideoPlayer extends React.Component {
	render() {
		const opts = {
			width: "100%",
			height: "400px",
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 0,
			},
		};

		return (
			<div className="container-fluid">
				<YouTube videoId="rDPN-ML5wKQ" opts={opts} />
			</div>
		);
	}
}

export default VideoPlayer;

import React from "react";
import YouTube from "react-youtube";
import "../../assets/css/Cus.css";

class VideoPlayer extends React.Component {
	render() {
		const opts = {
			width: "100%",
			height: "100%",
			playerVars: {
				autoplay: 0,
			},
		};

		return (
			<div className="ytvideo h-[500px]">
				<YouTube videoId="rDPN-ML5wKQ" opts={opts} className="ytvideo" />
			</div>
		);
	}
}

export default VideoPlayer;

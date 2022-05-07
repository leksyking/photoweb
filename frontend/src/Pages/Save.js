import React from "react";
import GalleryPics from "../components/GalleryPicsCard";

function Save() {
	return (
		<div className='save'>
			<div className='body ' style={{ paddingTop: "2%" }}>
				<div className='pt-5 font-mono text-lg'>34 saved</div>
				<div className='row'>
					<GalleryPics />
				</div>
			</div>
		</div>
	);
}

export default Save;

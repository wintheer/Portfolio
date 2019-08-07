import React from 'react'

class Front extends React.Component {

	render() {
		return (
			<div id="front" className="front_container">
	
				<div className="image_container">
					<div className="image"></div>
					<h1>Designer, Full Stack Developer <br/> & Triathlete</h1>
				</div>
				
				<style jsx>{`
					.front_container {
						height: 100%;
					}
	
					.image_container {
						position: relative;
						background: black;
						height: 100%;
						width: 100%;
						display: table;
						/* align-items: center; */
						z-index: -1;
					}
	
					.image {
						opacity: .3;
						background-image: url("../static/Front_image.png");
						position: absolute;
						width: 100%;
						height: 100%;
						display: block;
						background-position: center;
						background-repeat: no-repeat;
						background-size: cover;
						filter: blur(1px);
					}
	
					h1 {
						font-size: 300%;
						position: relative;
						text-align: center;
						margin: 0;
						display: table-cell; 
						vertical-align: middle;
						z-index: 1;
						color: white;
					}
				`}
				</style>
			</div>
	  	)
	}
}

export default Front;
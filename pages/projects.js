import React from 'react';
import Link from 'next/link';


class Projects extends React.Component {

	render() {
		return (
			<div id="projects" className="projects_container">
				<div className="image_grid">
					<div className="project_item" onClick={showcase("This project!")}>
						<div className="image_container">
							<picture>
								<img className="project_picture" src="" alt="Project one"/>
							</picture>
						</div>
	
						<div className="text_container">
							<h1>VR maintenance training</h1>
						</div>
					</div>
	
					<div className="project_item" onClick={showcase("Another project!")}>
						<div className="image_container">
							<picture>
								<img className="project_picture" src="" alt="Project two"/>
							</picture>
						</div>
	
						<div className="text_container">
							<h1>Project with LEGO</h1>
						</div>
					</div>
	
					<div className="project_item" onClick={showcase("Third project")}>
						<div className="image_container">
							<picture>
								<img className="project_picture" src="" alt="Project three"/>
							</picture>
						</div>
	
						<div className="text_container">
							<h1>VR texture rendering</h1>
						</div>
					</div>
	
					<div className="project_item" onClick={showcase("Fourth project")}>
						<div className="image_container">
							<picture>
								<img className="project_picture" src="" alt="Project four"/>
							</picture>
						</div>
	
						<div className="text_container">
							<h1>Interactive interior decorating</h1>
						</div>
					</div>
	
					<div className="project_item" onClick={showcase("Fifth project")}>
						<div className="image_container">
							<picture>
								<img className="project_picture" src="" alt="Project five"/>
							</picture>
						</div>
	
						<div className="text_container">
							<h1>Jöro</h1>
						</div>
					</div>
	
				</div>
	
				<style jsx>{`
					.projects_container {
						padding-top: 4vw;
						height: 100%;
						padding-left: 15%;
						padding-right: 15%;
					}
	
					.image_grid {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						grid-template-rows: repeat(2, 18vw);
						grid-gap: 15px;
					}
	
					h1 {
						margin-left: 0;
						text-align: center;
						padding-left: 0;
					}
	
					.project_item {
						background: grey;
					}
	
					.text_container {
						padding-left: 0;
					}
				`}
				</style>
			</div>
		)
	}
}

export default Projects;

// I need to use this function as a generic method 
function showcase(whichProject) {
	return function () {
		console.log(whichProject);
	}
}
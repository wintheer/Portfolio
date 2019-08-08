import React from 'react';

class Skills extends React.Component {

	render() {
		return (
			<div name="skills" className="skills_container">
				<div className="designer_container">
					<h1>Designer</h1>
					<ul>
						<li>Idea Generating</li>
						<li>Prototyping</li>
						<ul>
							<li>Arduino</li>
							<li>Raspberry Pi</li>
							<li>3D-Printing</li>
							<li>Custom PCBs</li>
						</ul>
						<li>Sketching</li>
						<li>Participatory Design</li>
						<li>Interaction Design</li>
						<li>Adobe:</li>
						<ul>
							<li>Photoshop</li>
							<li>inDesign</li>
							<li>Illustrator</li>
						</ul>
						<li>Blender</li>
					</ul>
				</div>
		
				
				<div className="frontend_container">
					<h1>Frontend</h1>
					<ul>
						<li>HTML/CSS</li>
						<li>JavaScript</li>
						<ul>
							<li>jQuery</li>
							<li>Bootstrap</li>
						</ul>
						<li>React.JS</li>
						<ul>
							<li>Next.JS</li>
						</ul>
						<li>Node.JS</li>
						<li>npm</li>
					</ul>
				</div>
		
				<div className="backend_container">
					<h1>Backend</h1>
					<ul>
						<li>Java</li>
						<li>C#</li>
						<li>SQL</li>
					</ul>
				</div>
				
		
				<div className="triathlon_container">
					<h1>Triathlete</h1>
					<ul>
						<li>Karrebæksminde Triatlon:</li>
						(950m, 50km, 10,5km)
						<ul>
							<li>1st: 3:36:45</li>
							<li>2nd: 3:13:30</li>
						</ul>
						<li>Aarhus KMD Ironman:</li>
						(1500m, 45km, 10km)
						<ul>
							<li>1st: 3:06:35</li>
						</ul>
					</ul>
				</div>
		
				<div className="tools_container">
					<h1>Tools & IDEs</h1>
					<ul>
						<li>IntelliJ Studio</li>
						<li>Android Studio</li>
						<li>Unity</li>
						<li>Visual Studio (Code)</li>
						<li>Git</li>
					</ul>
				</div>

				<style jsx>{`
					h1 {
						color: black;
						margin: 10 0 0 0;
						text-align: center;
					}
					
					ul {
						list-style-type: none;
					
					}
					
					li {
						
						list-style-type: none;
						margin-top: 10px;
						font-size: 130%;
					}
					
					.skills_container {
						height: 100%;
						background: #0c0c0c;
						padding-top: 4vw;
						padding-left: 15%;
						padding-right: 15%;
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						grid-template-rows: repeat(8, 4vw);
						grid-gap: 20px;
					}
					
					.ProjectItem {
						height: 100%;
						width: 100%;
						background: grey;
						object-fit: cover;
					}
					
					.designer_container {
						grid-column-start: 1;
						grid-column-end: 2;
						grid-row-start: 1;
						grid-row-end: 8;
						background: grey;
					}
					
					.frontend_container {
						grid-column-start: 2;
						grid-column-end: 3;
						grid-row-start: 1;
						grid-row-end: 5;
						background: grey;
					}
					
					.backend_container {
						grid-column-start: 2;
						grid-column-end: 3;
						grid-row-start: 5;
						grid-row-end: 8;
						background: grey;
					}
					
					.tools_container {
						grid-column-start: 3;
						grid-column-end: 4;
						grid-row-start: 1;
						grid-row-end: 4;
						background: grey;
					}
					
					.triathlon_container {
						background: grey;
						grid-row-start: 4;
						grid-row-end: 8;
					}
				`}</style>

			</div>
		)
	}
}

export default Skills;
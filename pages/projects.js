import React from 'react';
import Link from 'next/link';

import { Card, CardImg, CardText, CardBody, 
	CardTitle, CardSubtitle, Button, 
	Row, Col } from 'reactstrap'

class Projects extends React.Component {

	render() {
		return (
			<div id="projects" className="projects_container">
				<Row>

					<Col>
						<Card onClick={showcase("This project!")}>
							<CardImg top width="100%" src="/static/images/Front_image.png" alt="Card image cap"/>
							<CardTitle>VR maintenance training</CardTitle>
						</Card>
					</Col>

					<Col>
						<Card onClick={showcase("Another project!")}>
							
							<CardTitle>Project with LEGO</CardTitle>
						</Card>
					</Col>
	
					<Col>
						<Card onClick={showcase("Third project")}>

							<CardTitle>VR texture rendering</CardTitle>
							<Button>View Demo</Button>
							<Button>See on GitHub</Button>
						</Card>
					</Col>

				</Row>

				<Row>
					<Col lg="4">
						<Card onClick={showcase("Fourth project")}>
							
							<CardTitle>Interactive interior decorating</CardTitle>
						</Card>
					</Col>
	
					<Col lg="4">
						<Card onClick={showcase("Fifth project")}>
							
							<CardTitle>Jöro</CardTitle>
						</Card>
					</Col>

				</Row>
	
				<style jsx>{`
		
					h1 {
						margin-left: 0;
						text-align: center;
						padding-left: 0;
					}

					.card:hover {
						background: yellow;
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
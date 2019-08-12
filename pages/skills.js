import { Card, CardBody, 
	CardTitle, Row, Col } from 'reactstrap'

class Skills extends React.Component {

	render() {
		return (
			<div name="skills" className="skills_container">
      <div className="site_spacer"/>
				<Row>
					<Col sm="12" lg="4">
						<Card className="designer_container">
							<CardTitle><h1>Designer</h1></CardTitle>
              <CardBody>
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
                  <li>Blender</li>
                  <li>Adobe Photoshop, inDesign & Illustrator</li>
                </ul>
              </CardBody>
						</Card>
            <div className="card_spacer_mobile"/>
					</Col>
					<Col sm="12" lg="4">
						<Card className="frontend_container">
							<CardTitle><h1>Frontend</h1></CardTitle>
              <CardBody>
                <ul>
                  <li>HTML & CSS</li>
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
              </CardBody>
						</Card>

            <div className="card_spacer"/>
            <div className="card_spacer_mobile"/>
				
						<Card className="backend_container">
							<CardTitle><h1>Backend</h1></CardTitle>
              <CardBody>
                <ul>
                  <li>Java</li>
                  <li>C#</li>
                  <li>SQL</li>
                </ul>
              </CardBody>
						</Card>
            <div className="card_spacer_mobile"/>
					</Col>
					
					<Col sm="12" lg="4">
            <Card className="tools_container">
							<CardTitle><h1>Tools & IDEs</h1></CardTitle>
              <CardBody>
                <ul>
                  <li>IntelliJ Studio</li>
                  <li>Android Studio</li>
                  <li>Unity</li>
                  <li>Visual Studio (Code)</li>
                  <li>Git</li>
                </ul>
              </CardBody>
						</Card>

            <div className="card_spacer"/>
            <div className="card_spacer_mobile"/>

						<Card className="triathlon_container">
							<CardTitle><h1>Triathlete</h1></CardTitle>
              <CardBody>
                <ul>
                  <li>Karrebæksminde Triatlon:</li>
                  (950m, 50km, 10.5km)
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
              </CardBody>
						</Card>
				
					</Col>
				</Row>

        <div className="site_spacer"/>

				<style jsx>{`
					h1 {
						color: black;
						margin-top: 10px;
						text-align: center;
          }

          .card-title {
            margin-bottom: 0;
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
            
						/*background: #0c0c0c;*/
						
						
						
					} 
          
          @media screen and (min-width: 768px) {
            .card_spacer {
              margin-bottom: 1rem;
            }

            .site_spacer {
              padding-top: 7vw;
            }
          }

          @media screen and (max-width: 768px) {
            .card_spacer {
              margin-bottom: 0;
            }

            .card_spacer_mobile {
              margin-bottom: 3rem;
            }

            .site_spacer {
              padding-top: 7vw;
            }
          }

				`}</style>

			</div>
		)
	}
}

export default Skills;
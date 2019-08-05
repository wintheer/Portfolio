export default function Skills() {
  return (
    <div className="Grid">
    	<div className="designer_container">
    		<h1>Designer</h1>
    		<ul>
    			<li>Idea Generating</li>
    			<li>Prototyping</li>
    			<ul>
    				<li>Arduino</li>
    				<li>Raspberry Pi</li>
				</ul>
    			<li>Sketching</li>
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
    			<li>Karrebæksminde Triatlon (950m, 50km, 10,5km):</li>
    			<ul>
    				<li>1st: 3:36:45</li>
    				<li>2nd: 3:13:30</li>
    			</ul>
    			<li>Aarhus KMD Ironman (1500m, 45km, 10km):</li>
    			<ul>
    				<li>1st: 3:06:35</li>
    			</ul>
    		</ul>
    	</div>

    	<style jsx>{`
				.Grid {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					grid-template-rows: repeat(4, 8vw);
					grid-gap: 15px;
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
	    			grid-row-end: 4;
	    			background: grey;
	    			padding-left: 20px;
	    		}

	    		.frontend_container {
	    			grid-column-start: 2;
	    			grid-column-end: 3;
	    			grid-row-start: 1;
	    			grid-row-end: 3;
	    			background: grey;
	    			padding-left: 20px;
	    		}

	    		.backend_container {
	    			grid-column-start: 2;
	    			grid-column-end: 3;
	    			grid-row-start: 3;
	    			grid-row-end: 4;
	    			background: grey;
	    			padding-left: 20px;
	    		}

	    		.triathlon_container {
	    			grid-column-start: 3;
	    			grid-column-end: 4;
	    			grid-row-start: 1;
	    			grid-row-end: 3;
	    			background: grey;
	    			padding-left: 20px;
	    		}

    		`}
    	</style>
    </div>
  )
}
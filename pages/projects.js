import Link from 'next/link'

export default function Projects() {
	return (
		<div>
			<div className="ImageGrid">
				<div className="ProjectItem" onClick={showcase("This project!")}>
					<div className="ImageContainer">
						<picture>
							<img className="ProjectPicture" src="" alt="Project one"/>
						</picture>
					</div>

					<div className="TextContainer">
						<h2>Project one</h2>
						<span>Some description text about this project</span>
					</div>
				</div>

				<div className="ProjectItem" onClick={showcase("Another project!")}>
					<div className="ImageContainer">
						<picture>
							<img className="ProjectPicture" src="" alt="Project two"/>
						</picture>
					</div>

					<div className="TextContainer">
						<h2>Project two</h2>
						<span>Some description text about this project</span>
					</div>
				</div>

				<div className="ProjectItem" onClick={showcase("Third project")}>
					<div className="ImageContainer">
						<picture>
							<img className="ProjectPicture" src="" alt="Project three"/>
						</picture>
					</div>

					<div className="TextContainer">
						<h2>Project three</h2>
						<span>Some description text about this project</span>
					</div>
				</div>

				<div className="ProjectItem" onClick={showcase("Fourth project")}>
					<div className="ImageContainer">
						<picture>
							<img className="ProjectPicture" src="" alt="Project four"/>
						</picture>
					</div>

					<div className="TextContainer">
						<h2>Project four</h2>
						<span>Some description text about this project</span>
					</div>
				</div>

			</div>

			<style jsx>{`
				.ImageGrid {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-template-rows: repeat(2, 10vw);
					grid-gap: 15px;

				}

	    		.ProjectItem {
	    			
	    			background: grey;
	    		}

	    		.TextContainer {
	    			padding-left: 20px;
	    		}

    		`}
    		</style>
		</div>
	)
}

// I need to use this function as a generic method 
function showcase(whichProject) {
	return function () {
		console.log(whichProject);
	}
}
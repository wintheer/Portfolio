import React from 'react'

class About extends React.Component {

	static getInitialProps() {

		return {};
	}

	constructor(props) {
		super(props);

		this.state = {
			someVariable: "This can be anything"
		}
	}

	componentDidMount() {
		console.log("componentDidMount");
	}

	componentDidUpdate() {
		console.log("componentDidUpdate");
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	render() {
		return (
			<div id="about" className="about_container">
	
	
				<style jsx>{`
					
				`}
				</style>
			</div>
		)
	}
}

export default About;
import Link from 'next/link'
import React from 'react'
import {animateScroll, Events, Element, Link as ScrollLink, scroller} from 'react-scroll'

class Header extends React.Component {

	componentDidMount() {
		Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
	}

	scrollToElement(name) {
		console.log("Called scroll function.")
		scroller.scrollTo(name, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuarts'
		})
		
	}

	render() {
		return (
			<div className="navbar">
					<div className="navbar_container">
						<div className="navbar_left">
							<picture onClick={() => animateScroll.scrollToTop()}>
								<source media="(min-width:900px" srcSet="../static/Logo_desktop.png"></source>
								<source media="(min-width:500px" srcSet="../static/Logo_mobile.png"></source>
								<img className="logo" src="" alt="Frederik Winther"/>
						</picture>
							
						</div>
		
						<div className="navbar_right">
							<a>About</a>
							<a onClick={() => this.scrollToElement('skills')}>Skills</a>
							<a onClick={() => this.scrollToElement('projects')}>Projects</a>
							<a onClick={() => animateScroll.scrollToBottom()}>Contact</a>
							<Link href="/CV"><a>CV</a></Link>
						</div>
					</div>
					
					<style jsx>{`
						a {
							cursor: pointer;
						}

						.navbar {
							height: 60px;
							left: 0;
							top: 0;
							right: 0;
							position: fixed;
							width: 100%;
							background: rgba(255, 255, 255, 0.4);
					}
					
					.logo {
							font-family: "Verdana";
							font-size: 14pt;
							height: 50px;
							background: none;
					}
					
					.logo:hover {
							cursor: pointer;
							animation-name: changeColor;
							animation-duration: 5s;
					}
					
					.person_name {
							margin-left: 10px;
					}
					
					.navbar_container {
							padding-left: 10%;
							padding-right: 10%;
							min-width: 400px;
							align_items: center;
							display: flex;
							height: 100%;
							justify-content: space-between;
							margin-left: auto;
							margin-right: auto;
					}
					
					.navbar_left {
							display: flex;
							align-items: center;
							box-sizing: border-box;
							height: 100%;
					}
					
					.navbar_right {
							box-sizing: border-box;
							justify-content: flex-end;
							height: 100%;
							align-items: center;
							display: flex;
					}
					
					a {
							color: black;
							text-decoration: none;
							font-family: "Verdana";
							font-size: 12pt;
							border-radius: 10%;
							padding: 4px 15px 4px 15px;
							margin-left: 15px;
					}
					
					a:hover {
							background: rgba(0,0,0,0.1);
					}
					
					@keyframes changeColor {
							
					}
					`}</style>
		
				</div>
				)
	}
}

export default Header;
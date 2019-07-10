import Link from 'next/link'

export default function Navigation() {
	return (
	<div className="navbar">
      <div className="navbar_container">
      	<div className="navbar_left">
      		<picture>
      			<source media="(min-width:900px" srcSet="../static/Logo_desktop.png"></source>
      			<source media="(min-width:500px" srcSet="../static/Logo_mobile.png"></source>
      			<img className="logo" src="" alt="Frederik Winther"/>
  			</picture>
      		
      	</div>

      	<div className="navbar_right">
      		<Link href="#about"><a>About</a></Link>
      		<Link href="#skills"><a>Skills</a></Link>
      		<Link href="#projects"><a>Projects</a></Link>
      		<Link href="#contact"><a>Contact</a></Link>
      		<Link href="/CV"><a>CV</a></Link>
      	</div>
      </div>
      <style jsx>{`

      		.navbar {
	            height: 60px;
	            left: 0;
	            top: 0;
	            right: 0;
	            position: fixed;
	            width: 100%;
	            background: rgba(88, 95, 150, 0.6);
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

      	`}
      </style>
    </div>
    )
}
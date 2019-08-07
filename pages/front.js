export default function Front() {
  return (
  	<div className="box">

  		<div className="front">
  			<div className="overlay"></div>
  			<h1>Designer, Full Stack Developer & Triathlete</h1>
  		</div>
    	
    	<style jsx>{`
    		.box {
    			height: 100%;
    		}

    		.front {
    			position: relative;
    			background-image: url("../static/Front_image.png");
    			height: 100%;
    			width: 100%;
    			display: table;
    			background-position: center;
  				background-repeat: no-repeat;
  				background-size: cover;
  				align-items: center;
  				z-index: -1;

    		}

    		.overlay {
    			position: relative;
    			background: rgba(0, 0, 0, .7);
    			z-index: 0;
    			position: absolute;
			    width: 100%;
			    height: 100%;
    			display: block;
    		}

    		h1 {
    			text-align: center;
    			margin: 0;
    			display: table-cell; 
    			vertical-align: middle;
    			z-index: 10;
    			color: white;
    		}
    	`}
    	</style>
    </div>
  )
}
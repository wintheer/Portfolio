import Navigation from './Navigation'

export default function Layout(props) {
  return (
  	<header>
	    <Navigation/>
	    <style jsx global> {`
          body {
            margin: 0;
            height: 100%;
          }

          html {
          	margin: 60px 0 0 0;
          	height: 100%;
          }
      `}
      </style>
    </header>
  )
}
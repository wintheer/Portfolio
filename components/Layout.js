import Navigation from './Navigation'

export default function Layout(props) {
  return (
  	<header>
	    <Navigation/>
	    <style jsx global> {`
          body {
            margin-top: 60px;
            margin-left: 0;
            margin-right: 0;
          }
      `}
      </style>
    </header>
  )
}
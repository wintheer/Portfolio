import Navigation from './Navigation'
import Head from 'next/head'

export default function Layout(props) {
  return (
  	<React.Fragment>
      <Head>
        <title>Frederik Winther</title>
      </Head>
	    <Navigation/>
	    <style jsx global> {`
          body, html {
            margin: 0;
            height: 100%;
          }

          #__next {
          	height: 100%;
          }
      `}
      </style>
    </React.Fragment>
  )
}
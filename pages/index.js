import React from 'react'
import Layout from '../components/layouts/Layout.js'
import Link from 'next/link'
import Front from './front'
import About from './about'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'

import { Container, Row, Col } from 'reactstrap'

class Index extends React.Component {
	render() {
		return (
			<Layout>
				<Front/>
				<Container>
					<Skills/>
					<Projects/>
					<Contact/>
				</Container>
  		</Layout>
		)
	}
}
	

export default Index;
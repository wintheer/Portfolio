import Layout from '../components/Layout.js'
import Link from 'next/link'
import Front from './front'
import About from './about'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'

export default () => (
	<div className="container">
    	<Layout/>
    	<Front/>
    	
    	<Skills/>
    	<Projects/>
    	<Contact/>

    	<style jsx>{`
    		.container {
            	
            	height: 100%;
    		}
    		`}
		</style>
    </div>
)
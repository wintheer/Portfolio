import Layout from '../components/Layout.js'
import Link from 'next/link'
import Front from '../pages/front'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'

export default () => (
	<div className="outer">
    	<Layout/>
    	<Front/>
    	<Skills/>
    	<Projects/>
    	<Contact/>

    	<style jsx>{`
    		.outer {
            	
            	height: 100%;
    		}
    		`}
		</style>
    </div>
)
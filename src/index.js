// import React from 'react'
// import { render } from 'react-dom'
// import { App } from './components/App'
// import { Whoops404 } from './components/Whoops404'
// import { Router, Route, hashHistory} from 'react-router' 
// import './stylesheets/ui.scss' 
// import './stylesheets/index.scss' 


// window.React = React


// render (
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App}/>
// 		<Route path="list-days" component={App}>
// 			<Route path=":filter" component={App} />
// 		</Route>
// 		<Route path="add-day" component={App} />
// 		<Route path="*" component={Whoops404}/>
// 	</Router>,
// 	document.getElementById('react-container')
// )

import React from 'react'
import { render } from 'react-dom'
// import routes from './routes'
import MemberList from './components/ui/MemberList'


window.React = React

render(
	<MemberList />, 
	document.getElementById('react-container'))


	

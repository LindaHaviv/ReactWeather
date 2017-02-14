var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main');
var Weather = require('./components/Weather');
var About = require('./components/About');
var Examples = require('./components/Examples');

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}> 
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
  	</Route>
  </Router>, 
  document.getElementById('app')

);


// NOTES
//react components are the buildign blocks for your web app's UI
//the only thing that is required in react component is render method
//PROP VS. STATE
///props is the way you pass your data in to your component
//state is internally maintained and updated by the component
//a component shouldn't update its own props, but it si allowed to update its own state
//if you are trying to figure out if something is prop or state ask yourself: Is my component going to be updating the value?

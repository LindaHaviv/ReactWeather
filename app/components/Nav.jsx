var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function () {
		return (
			<div>
        <h1>Nav Component</h1>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
		);
	}
});

module.exports = Nav;
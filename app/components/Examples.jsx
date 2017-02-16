var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
	return (
    <div>
      <h1 classname="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol> 
        <li>
          <Link to="/?location=Manhattan">Manhattan, NY</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li> 
      </ol>
     </div>
    )
};

module.exports = Examples;

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });

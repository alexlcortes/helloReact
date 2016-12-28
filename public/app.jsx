var Greeter = React.createClass({

  getDefaultProps() {
    return {
      name: 'React',
      message: 'Message'
    };
  },

  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var firstName = 'Jando';
var firstMessage = 'This is from a React component.';

ReactDOM.render(
  <Greeter name={firstName} message={firstMessage}/>,
  document.getElementById('app')
);

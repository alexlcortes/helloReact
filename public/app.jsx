var Greeter = React.createClass({

  getDefaultProps() {
    return {
      name: 'React',
      message: 'Message goes here.'
    };
  },

  onButtonClick: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;

    alert(name);
  },

  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set name</button>
        </form>
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

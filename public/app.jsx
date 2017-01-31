var GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Some H1</h1>
        <p>Some paragraph</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function () {
    return (
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set name</button>
        </form>
    );
  }
});


var Greeter = React.createClass({
  // props get defined and these are the default props
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Message goes here.'
    };
  },
  // sets it's name state to the props value
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  handleNewName: function (name) {
    this.setstate({
      name: name
    });
  },
  // this fetches the value of name... and display to the screen
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div className="container col-md-4">
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <GreeterMessage />

        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Jando';
var firstMessage = 'Please enter your name below...';

ReactDOM.render(
  <Greeter name={firstName} message={firstMessage}/>,
  document.getElementById('app')
);

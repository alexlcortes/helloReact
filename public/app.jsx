var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello my name is {name}!</h1>
        <p>{message}</p>
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
      message: 'This is the default message!!!'
    };
  },
  // sets it's name state to the props value
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },
  // this fetches the value of name... and display to the screen
  render: function () {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Alex';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);

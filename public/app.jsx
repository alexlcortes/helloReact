// presentational component
var GreeterMessage = React.createClass({
  render: function () {

    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h3>Hello {name}.</h3>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <div className="formArea col-6">
          <form onSubmit={this.onFormSubmit}>
            <div>
              <input className="inputArea" type="text" ref="name" placeholder="Name..."/>
            </div>
            <div>
              <textarea className="textArea" ref="message" placeholder="Message..." rows="10"></textarea>
            </div>
            <div>
              <button>submit</button>
            </div>
          </form>
      </div>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'I am a React.js textbox application',
      message: 'Type your name and message below. Then click submit.'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div className="container">
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);

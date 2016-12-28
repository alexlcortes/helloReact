var Greeter = React.createClass({
  // props get defined and these are the default props
  getDefaultProps() {
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
  onButtonClick: function (e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    // once form is submited this.setState re-renders the compoments
    var name = nameRef.value;
    // this will clear the form field
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0){
      this.setState ({
        name: name
      });
    }
  },
  // this fetches the value of name... and display to the screen
  render: function () {
    var name = this.state.name;
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
var firstMessage = 'Please enter your name below...';

ReactDOM.render(
  <Greeter name={firstName} message={firstMessage}/>,
  document.getElementById('app')
);

var Greeter = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello React. We are go!</h1>
        <p>This is from the component...</p>
        <img src="http://img.cinemablend.com/cb/d/2/f/f/4/a/d2ff4a4b810264b39408e2c6d81b28b4f95225a1703be33db5ed9dbd27551930.jpg"/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);

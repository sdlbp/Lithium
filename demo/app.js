'use strict';

const Dilithium = require('../dilithium');

class TodoApp extends Dilithium.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form on-submit={this.handleSubmit}>
          <input on-change={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    console.log("hhhh")
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState({
      text: " ",
      items: this.state.items.concat(newItem)
    });
  }
}

class TodoList extends Dilithium.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

Dilithium.render(
    <TodoApp />,
    document.getElementById('container'),
  );

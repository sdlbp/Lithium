'use strict';

const Dilithium = require('../dilithium');

class CounterButton extends Dilithium.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: true
    };
  }
  clickHandler(){
    let count = this.state.count
    this.setState({show:false});
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.state.show ? 
          <div on-click={this.clickHandler.bind(this)}>
            <span>Count:</span>
            <span>{this.state.count}</span>
          </div>
          :
          <div>
            <span>FDF </span>
          </div>
        }
        
      </div>
    );
  }
}

Dilithium.render(
    <CounterButton title="Hello React Rally!" />,
    document.getElementById('container'),
  );

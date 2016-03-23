import React from 'react';
import ReactDOM from 'react-dom';
import Rebase from 're-base';
import CardsList from './cards-list.jsx';
import PostModal from './post-modal.jsx';

var base = Rebase.createClass('https://ramunas.firebaseio.com');

class Joint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: 'none'
    };
  }
  triggerSwitch(prop) {
    this.setState({switch: prop.switch})
  }
  toggleState() {
    if (this.state.switch === 'none') {
      this.setState({switch: 'block'});
    }
    else {
      this.setState({switch: 'none'});
    }
  }
  render() {

    return (
      <div>
        <div className="w3-topnav w3-center w3-large w3-blue-grey">
          <a href="#">Home</a>
          <a href="#" onClick={this.toggleState.bind(this)}>Post</a>
          <a href="#">Login</a>
        </div>
        <CardsList/>
        <PostModal switch={this.state.switch} onSwitch={this.triggerSwitch.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<Joint/>, document.getElementById('main'));

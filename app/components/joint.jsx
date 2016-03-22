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
      sw: 'none'
      // cards: []
    };
  }
  // componentDidMount() {
  //   this.ref = base.bindToState('cards', {
  //      context: this,
  //      state: 'cards',
  //      asArray: true
  //   });
  // }
  // componentWillUnmount () { // So that we don't get listeners keep adding, we will unmount them
  //    base.removeBinding(this.ref);
  // }
  toggleState() {
    if (this.state.sw === 'none') {
      this.setState({sw: 'block'});
    }
    else {
      this.setState({sw: 'none'});
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
        <PostModal switch={this.state.sw}/>
      </div>
    );
  }
}

ReactDOM.render(<Joint/>, document.getElementById('main'));

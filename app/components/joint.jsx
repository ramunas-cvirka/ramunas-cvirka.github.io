import React from 'react';
import ReactDOM from 'react-dom';
import Rebase from 're-base';
import CardsList from './cards-list.jsx';
import PostModal from './post-modal.jsx';
import {
  ToastContainer,
  ToastMessage,
} from 'react-toastr';

const base = Rebase.createClass('https://ramunas.firebaseio.com');
const tFak = React.createFactory(ToastMessage.animation);

class Joint extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      switch: 'none',
      authAction: base.getAuth() ? 'Logout' : 'Login',
    };
    this.constructor.childContextTypes = {
      switch: React.PropTypes.string.isRequired,
    };
  }
  triggerSwitch(prop) {
    this.setState({ switch: prop.switch });
  }
  toggleState() {
    if (this.state.switch === 'none') {
      this.setState({ switch: 'block' });
    } else {
      this.setState({ switch: 'none' });
    }
  }
  toggleAuth() {
    if (this.state.authAction === 'Login') {
      base.authWithOAuthPopup('google', (err) => {
        if (err) {
          this.refs.container.warning('Something went terribly wrong!', '', {
            closeButton: true,
          });
        } else {
          this.refs.container.success("Your're IN!", '', {
            closeButton: true,
          });
          this.setState({ authAction: 'Logout' });
        }
      });
    } else {
      base.unauth();
      this.refs.container.success("Your're OUT!", '', {
        closeButton: true,
      });
      this.setState({ authAction: 'Login' });
    }
  }
  render() {
    return (
      <div>
        <div className="w3-topnav w3-center w3-large w3-blue-grey">
          <a href="#">Home</a>
          <a href="#" onClick={this.toggleState.bind(this)}>Post</a>
          <a href="#" onClick={this.toggleAuth.bind(this)}>{this.state.authAction}</a>
        </div>
        <CardsList/>
        <PostModal switch={this.state.switch} onSwitch={this.triggerSwitch.bind(this)}/>
        <ToastContainer ref="container" toastMessageFactory={tFak} className="toast-top-right" />
      </div>
    );
  }
}

ReactDOM.render(<Joint/>, document.getElementById('main'));

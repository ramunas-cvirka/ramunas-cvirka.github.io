import React from 'react';
import Rebase from 're-base';
import linkState from 'react-link-state';
import {
  ToastContainer,
  ToastMessage,
} from 'react-toastr';
// import ReactDOM from 'react-dom';

const base = Rebase.createClass('https://ramunas.firebaseio.com');
const tFak = React.createFactory(ToastMessage.animation);

export default class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: props.switch,
    };
  }
  hideModal() {
    this.props.onSwitch({ switch: 'none' });
  }
  componentWillReceiveProps(prop) {
    this.setState({ switch: prop.switch });
  }
  errorCallBack(err) {
    if (err) {
      this.refs.container.error("You're not The One.", 'Failure!', {
        closeButton: true,
      });
    } else {
      this.hideModal();
    }
  }
  postData() {
    if (this.state.tagAuthor && this.state.dailyQuote && this.state.dailyTechNews &&
        this.state.dailyCodeSnippet && this.state.snippetDescription && base.getAuth()) {
      base.push('cards', { data:
      {
        tagDate: 0 - Date.now(),
        tagLanguage: this.state.tagLanguage || 'ruby',
        tagAuthor: this.state.tagAuthor,
        dailyQuote: this.state.dailyQuote,
        dailyTechNews: this.state.dailyTechNews,
        dailyCodeSnippet: this.state.dailyCodeSnippet,
        snippetDescription: this.state.snippetDescription,
      }, then: this.errorCallBack.bind(this),
      });
    } else {
      this.refs.container.warning("Don't waste my time.", 'Please!', {
        closeButton: true,
      });
    }
  }
  render() {
    const divStyle = { display: this.state.switch };
    return (
      <div className="w3-modal" style={divStyle}>
        <div className="w3-modal-content w3-card-8 w3-animate-top" style={{ maxWidth: '600px' }}>
          <div className="w3-container">
            <div className="w3-section">
              <label><b>Tech news</b></label>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Tech news"
                valueLink={linkState(this, 'dailyTechNews')}
              />
              <label><b>Quote author</b></label>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Quote"
                valueLink={linkState(this, 'tagAuthor')}
              />
              <label><b>Quote of the day</b></label>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Quote"
                valueLink={linkState(this, 'dailyQuote')}
              />
              <label><b>Code snippet of the day</b></label>
              <textarea
                className="w3-input w3-border"
                type="text"
                placeholder="Code Snippet"
                valueLink={linkState(this, 'dailyCodeSnippet')}
              />
              <label><b>Snippet description</b></label>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Snippet Description"
                valueLink={linkState(this, 'snippetDescription')}
              />
              <div className="w3-row" style={{ paddingTop: '16px' }}>
                <div className="w3-half">
                  <button
                    className="w3-btn w3-blue-grey w3-btn-block"
                    onClick={this.postData.bind(this)}>
                    Submit
                  </button>
                </div>
                <div className="w3-half">
                  <select
                    className="w3-select w3-margin-4"
                    name="option"
                    valueLink={linkState(this, 'tagLanguage')}>
                    <option defaultValue>ruby</option>
                    <option>python</option>
                    <option>javascript</option>
                    <option>go</option>
                    <option>csharp</option>
                    <option>x86asm</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <button
              onClick={this.hideModal.bind(this)}
              type="button"
              className="w3-btn w3-red">
              Cancel
            </button>
          </div>
        </div>
        <ToastContainer ref="container" toastMessageFactory={tFak} className="toast-top-right" />
      </div>
    );
  }
}

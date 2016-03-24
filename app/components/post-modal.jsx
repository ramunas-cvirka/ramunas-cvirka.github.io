import React from 'react';
import ReactDOM from 'react-dom';

export default class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: props.switch
    };
  }
  hideModal(e) {
    this.props.onSwitch({switch: 'none'});
  }
  componentWillReceiveProps(prop) {
    this.setState({switch: prop.switch})
  }
  render() {
    return (
      <div className="w3-modal" style={{display: this.state.switch}}>
        <div className="w3-modal-content w3-card-8 w3-animate-zoom" style={{maxWidth:'600px'}}>

          <div className="w3-container">
            <div className="w3-section">
              <label><b>Tech news</b></label>
              <input className="w3-input w3-border" type="text" placeholder="Tech news"/>
              <label><b>Quote of the day</b></label>
              <input className="w3-input w3-border" type="text" placeholder="Quote"/>
              <label><b>Code snippet of the day</b></label>
              <textarea className="w3-input w3-border" type="text" placeholder="Code Snippet"></textarea>
              <label><b>Snippet description</b></label>
              <input className="w3-input w3-border" type="text" placeholder="Snippet Description"/>
              <div className="w3-row" style={{paddingTop:'16px'}}>
                <div className="w3-half">
                  <button className="w3-btn w3-blue-grey w3-btn-block">Submit</button>
                </div>
                <div className="w3-half">
                  <select className="w3-select w3-margin-4" name="option">
                    <option defaultValue>Ruby</option>
                    <option>Python</option>
                    <option>JavaScript</option>
                    <option>Go</option>
                    <option>C#</option>
                    <option>Assembler</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <button onClick={this.hideModal.bind(this)} type="button" className="w3-btn w3-red">Cancel</button>
          </div>

        </div>
      </div>
    );
  }
}

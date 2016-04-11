import React from 'react';
import Highlight from 'react-highlight';
// import ReactDOM from 'react-dom';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // key: props.key,
      tagDate: props.tagDate,
      tagAuthor: props.tagAuthor,
      dailyQuote: props.dailyQuote,
      tagLanguage: props.tagLanguage,
      dailyTechNews: props.dailyTechNews,
      dailyCodeSnippet: props.dailyCodeSnippet,
      snippetDescription: props.snippetDescription,
    };
  }
  render() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(this.props.tagDate);

    if (this.props.tagDate === undefined) {
      return false;
    }
    return (
      <div className="w3-card-4 w3-margin">
        <header className="w3-container w3-light-grey w3-padding-4">
          <span className="w3-tag w3-round w3-indigo">
            {`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
          </span>
          <span className="w3-tag w3-round w3-teal">
            {this.props.tagAuthor}
          </span>
          <span className="w3-tag w3-round w3-blue-grey">
            {this.props.tagLanguage}
          </span>
        </header>
        <hr className="style14 w3-margin-0"/>
        <div className="w3-container">
          <p>{this.props.dailyTechNews}</p>
        </div>
        <hr className="style14 w3-margin-0" />
        <div className="w3-container">
          <p>{this.props.dailyQuote}</p>
        </div>
          <hr className="style14 w3-margin-0" />
        <div className="w3-container">
          <Highlight className={this.props.tagLanguage}>
              {this.props.dailyCodeSnippet}
          </Highlight>
        </div>
          <hr className="style14 w3-margin-0" />
        <div className="w3-container">
          <p>{this.props.snippetDescription}</p>
        </div>
      </div>
    );
  }
}

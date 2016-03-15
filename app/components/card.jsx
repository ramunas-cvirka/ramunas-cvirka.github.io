import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag_date: props.tag_date,
      tag_author: props.tag_author,
      daily_quote: props.daily_quote,
      tag_language: props.tag_language,
      daily_tech_news: props.daily_tech_news,
      daily_code_snippet: props.daily_code_snippet,
      snippet_description: props.snippet_description
    };
  }
  render() {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date(this.props.tag_date);

    return (
      <div className="w3-card-4 w3-margin">
        <header className="w3-container w3-light-grey">
      // "style": "padding-top: 10px"
          <span className="w3-tag w3-round w3-indigo">
            {date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear()}
          </span>
          <span className="w3-tag w3-round w3-teal">
            {this.props.tag_author}
          </span>
          <span className="w3-tag w3-round w3-blue-grey">
            {this.props.tag_language}
          </span>
        </header>
        <div className="w3-container">
          <p>{this.props.daily_tech_news}</p>
          <hr/>
          <p>{this.props.daily_quote}</p>
          <hr/>
          <p>{this.props.daily_code_snippet}</p>
          <hr/>
          <p>{this.props.snippet_description}</p>
        </div>
      </div>
    );
  }
}

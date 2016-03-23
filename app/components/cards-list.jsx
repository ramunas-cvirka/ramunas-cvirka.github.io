import React from 'react';
import ReactDOM from 'react-dom';
import Rebase from 're-base';
import Card from './card.jsx';

var base = Rebase.createClass('https://ramunas.firebaseio.com');

export default class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }
  componentDidMount() {
    this.ref = base.bindToState('cards', {
       context: this,
       state: 'cards',
       asArray: true
    });
  }
  componentWillUnmount () {
     base.removeBinding(this.ref);
  }
  render() {
    let split_cards_list = [];
    let total_cards = this.state.cards.length;
    for (let i = 0; i < total_cards; i+=3) {
      let row_list = [];
      let ll = total_cards - i - 3;
      if (ll >= 0) {
        row_list.push([i, i + 1, i + 2]);
      } else if ( ll === -1) {
        row_list.push([i, i + 1]);
      } else {
        row_list.push([i]);
      }
      split_cards_list.push(row_list);
    }

    return (
      <div className="w3-container">
        {split_cards_list.map(row => {
          return (
            <div className="w3-row">
              <div className="w3-col" style={{ width: '14%' }}><br/></div>
              <div className="w3-col" style={{ width: '24%' }}>
                <Card {...this.state.cards[row[0]]} />
              </div>
              <div className="w3-col" style={{ width: '24%' }}>
                <Card {...this.state.cards[row[1]]} />
              </div>
              <div className="w3-col" style={{ width: '24%' }}>
                <Card {...this.state.cards[row[2]]} />
              </div>
              <div className="w3-col" style={{ width: '14%' }}><br/></div>
            </div>
          );
        }
        )}
      </div>
    );
  }
}

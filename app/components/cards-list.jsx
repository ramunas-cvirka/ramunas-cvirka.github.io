import React from 'react';
// import ReactDOM from 'react-dom';
import Rebase from 're-base';
import Card from './card.jsx';

const base = Rebase.createClass('https://ramunas.firebaseio.com');

export default class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }
  componentDidMount() {
    this.ref = base.bindToState('cards', {
      context: this,
      state: 'cards',
      asArray: true,
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  render() {
    const splitCardsList = [];
    const totalCards = this.state.cards.length;
    for (let i = 0; i < totalCards; i += 3) {
      const rowList = [];
      const ll = totalCards - i - 3;
      if (ll >= 0) {
        rowList.push(...[i, i + 1, i + 2]);
      } else if (ll === -1) {
        rowList.push(...[i, i + 1]);
      } else {
        rowList.push(...[i]);
      }
      splitCardsList.push(rowList);
    }

    return (
      <div className="w3-container">
        {splitCardsList.map((row, index) => {
          return (
            <div className="w3-row">
              <div className="w3-col" style={{ width: '14%' }}><br/></div>
              <div className="w3-col" style={{ width: '24%' }}>
                <Card {...this.state.cards[row[0]]} key={index * 3}/>
              </div>
              <div className="w3-col" style={{ width: '24%' }}>
                <Card {...this.state.cards[row[1]]} key={index * 3 + 1}/>
              </div>
              <div className="w3-col" style={{ width: '24%' }}>
                <Card {...this.state.cards[row[2]]} key={index * 3 + 2}/>
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

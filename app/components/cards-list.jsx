import React from 'react';
import ReactDOM from 'react-dom';
import Rebase from 're-base';
import Card from './card.jsx';

var base = Rebase.createClass('https://ramunas.firebaseio.com');

class CardsList extends React.Component {
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
    console.log(this.state);
  }
  componentWillUnmount () { // So that we don't get listeners keep adding, we will unmount them
     base.removeBinding(this.ref);
  }
  render() {
    // console.log(this.state)
    // for (let i = 0; i < this.cards.length; i+=3) {
    //    console.log(i);
    // }
    return (
      <div className="w3-container">
        <div className="w3-row">
          <div className="w3-col" style={{ width: '14%' }}><br/></div>
          <div className="w3-col" style={{ width: '24%' }}>
            <Card {...this.state.cards[0]} />
          </div>
          <div className="w3-col" style={{ width: '24%' }}>
            <Card {...this.state.cards[0]} />
          </div>
          <div className="w3-col" style={{ width: '24%' }}>
            <Card {...this.state.cards[0]} />
          </div>
          <div className="w3-col" style={{ width: '14%' }}><br/></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CardsList/>, document.getElementById('main'));

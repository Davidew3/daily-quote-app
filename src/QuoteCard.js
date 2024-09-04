import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Twitter } from 'react-bootstrap-icons';
import { randomBackgroundColor } from './Colors';
import quotes from './Quotes';

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].text, // initialize first quote
      author: quotes[0].author, // initialize first quote with the first author
      backgroundColor: '#6b4bc5',
      cardBodyRandomColor: '#97c1a9', // initialize with a different color
      key: 0, // added a key to force re-render for button
      // other state variables...
    };
  }

  // Method to fetch a new quote...
  fetchNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColor = randomBackgroundColor();
  
    this.setState((prevState) => ({
      quote: quotes[randomIndex].text,
      author: quotes[randomIndex].author,
      backgroundColor: randomColor.background,
      cardBodyRandomColor: randomColor.backgroundColor,
      color: randomColor.color,
      boxShadow: randomColor.boxShadow,
      border: randomColor.border,
      btnBg: randomColor.btnBg,
      key: prevState.key + 1 // update the key to force re-render on button click
    }));
  }

  render() {
    return (
      <div id="quote-box" style={{ background: this.state.backgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card key={this.state.key} style={{ backgroundColor: this.state.cardBodyRandomColor, color: this.state.color, boxShadow: this.state.boxShadow, border: this.state.border, width: '18rem' }} className="QuoteCard">
          <Card.Body>
            <Card.Title><span className='title'>Daily Quote</span></Card.Title>
            <Card.Text>
              <span id="text">{this.state.quote}</span>
              <br /> <br />
              <span id="author">{this.state.author}</span>
            </Card.Text>
            <a id="tweet-quote" target="_blank;" href={`https://twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author}`}><span className="icon-large"><Twitter /></span></a>
            <Button id="new-quote" className='QuoteCard-button' style={{ backgroundColor: this.state.btnBg }} onClick={this.fetchNewQuote}>New Quote</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default QuoteCard;
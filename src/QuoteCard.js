import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Twitter } from 'react-bootstrap-icons';
import { quotes, authors } from './quotes.js'; // Path to my quotes.js

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0], // initialize first quote
      author: authors[0], // initialize first quote with the first author
      backgroundColor: '#6b4bc5',
      // other state variables...
    };
  }

  // Method to fetch a new quote...
  fetchNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const colors = ['#97c1a9', '#b7cfb7', '#cce2cb', '#c7dbda', '#fdd7c2', '55cbcd', 'e2f0cb', 'ffdbcc']; // array of colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; // choose a random color
  
    this.setState({
      quote: quotes[randomIndex],
      author: authors[randomIndex],
      backgroundColor: randomColor, // update the background color
    });
  }

  render() {
    return (
      <div id="quote-box" style={{ backgroundColor: this.state.backgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ width: '18rem' }} className="QuoteCard">
          <Card.Body>
            <Card.Title><span class='title'>Daily Quote</span></Card.Title>
            <Card.Text>
              <span id="text">{this.state.quote}</span> ~ <span id="author">{this.state.author}</span>
            </Card.Text>
            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author}`}><span className="icon-large"><Twitter /></span></a>
            <Button id="new-quote" className='QuoteCard-button' onClick={this.fetchNewQuote}>New Quote</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default QuoteCard;




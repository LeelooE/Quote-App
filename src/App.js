import React, { Component } from "react";
import "./App.scss";
import Title from "./components/title";
import FirstButton from "./components/firstbutton";
import Container from "./components/container";
import TwitterButton from "./components/twitter";

class App extends Component {
  state = {
    quote: undefined,
    response: undefined,
    author: undefined,
    twitter: false
  };
  getQuote = async e => {
    const apiCall = await fetch("https://talaikis.com/api/quotes/random/");
    const response = await apiCall.json();
    this.setState({
      twitter: true,
      response: response,
      quote: response.quote,
      author: response.author
    });
  };
  render() {
    return (
      <div className="app">
        <Title />
        <div className="container">
          <Container quote={this.state.quote} author={this.state.author} />
          <div className="container__buttons">
            <FirstButton loadQuote={this.getQuote} />
            <div>
            {this.state.twitter && (
              <TwitterButton
                destination={`https://twitter.com/home/?status="${
                  this.state.quote
                }" - ${this.state.author}`}
              />
            )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

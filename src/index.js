import React from 'react';
import ReactDOM from 'react-dom/client';
import '@shoelace-style/shoelace/dist/themes/light.css';
import './index.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

import { SlCard } from '@shoelace-style/shoelace/dist/react';
import { SlButton } from '@shoelace-style/shoelace/dist/react';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.74/dist/');

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBack: false
        }
    }
    flipCard = () => {
        console.log('flipping card: ', this.state);
        this.setState({showBack: !this.state.showBack});
    }
    render() {
        return (
            <SlCard onClick={this.flipCard} className="inline card-basic">
                {this.state.showBack ? this.props.values.back : this.props.values.front}
            </SlCard>
        );
    }
}

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    front: "What colour is a tomato?",
                    back: "Red"
                },
                {
                    front: "What is 13 x 9 x 17",
                    back: "1989"
                },
                {
                    front: "What do you call a collection of stories passed down over generations?",
                    back: "folklore"
                }
            ],
            newFront: '',
            newBack: '',
            currentCard: 0,
        };
    }

    addCard = () => {
        console.log('adding card: ', this.state.newFront, this.state.newBack);
        const cards = this.state.cards;
        cards.push({
            front: this.state.newFront,
            back: this.state.newBack,
        });
        this.setState({cards: cards});
        this.setState({newFront: ''});
        this.setState({newBack: ''});
        console.log('after adding: ', this.state.cards);
    }

    handleChangeFront = (e) => {
        this.setState({newFront: e.target.value});
    }

    handleChangeBack = (e) => {
        this.setState({newBack: e.target.value});
    }

    correctRemove = () => {
        if (this.state.cards.length <= 1) return;
        const newCards = this.state.cards.slice(0, this.state.currentCard).concat(this.state.cards.slice(this.state.currentCard + 1, this.state.cards.length));        
        this.setState({
            cards: newCards,
            currentCard: this.state.currentCard % this.state.cards.length,
            showBack: false
        });
        console.log('after removing, cards is: ', this.state.cards, 'currentCard is: ', this.state.currentCard);
    }
    
    correctKeep = () => {
        this.setState({
            currentCard: (this.state.currentCard + 1) % this.state.cards.length, 
            showBack: false
        });
        console.log('after modifying, currentCard is: ', this.state.currentCard);
    }

    wrongKeep = () => {
        this.setState({
            currentCard: (this.state.currentCard + 1) % this.state.cards.length, 
            showBack: false
        });
        console.log('after modifying, currentCard is: ', this.state.currentCard);
    }

    render() {
        console.log('cardToShow: ', this.state.cards[this.state.currentCard]);
        return (
            <div>
                <div className="observe">
                    <Card values={this.state.cards[this.state.currentCard]} showBack={this.state.showBack}/>
                </div>
                <div className="interact">
                    <div className="buttonRow">
                        <SlButton onClick={this.correctRemove}>
                            Correct, remove
                        </SlButton>
                        <SlButton onClick={this.correctKeep}>
                            Correct, but keep
                        </SlButton>
                        <SlButton onClick={this.wrongKeep}>
                            Wrong, try again later
                        </SlButton>
                    </div>
                    <div className="textbox">
                        <input type="text" placeholder="Add new card (front)" value={this.state.newFront} onChange={this.handleChangeFront}></input>
                    </div>
                    <div className="textbox">
                        <input type="text" placeholder="Add new card (back)" value={this.state.newBack} onChange={this.handleChangeBack}></input>
                        <button className="addCard" onClick={this.addCard}>Add Card</button>
                    </div>
                </div>
            </div>

        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Deck />);

/*
what does this look like:
flashcards is the app itself
flashcards:
    deck:
        top card, the rest of the deck
    text box to add front & back
    button to say "add this new card"
    button for "correct, remove"
    button for "correct, but keep for next time"
    button for "i got this wrong"
    stats for overall right/wrong answers
    each card remembers if it's new, or if you got it right/wrong last time

idea 1: all the data should be in the Deck component, so each individual card is as dumb as possible (just displays data the deck keeps)
so e.g. deck has a cardsList array where each element looks like:
{
    front: "what colour is a tomato",
    back: "red",
    correctLast: true OR false OR null
}
*/
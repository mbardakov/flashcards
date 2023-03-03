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
            showback: false
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('get derived state from props: ', props, 'state: ', state);
        return {showback: props.showback};
    }
    render() {
        console.log('rednering card with showback: ', this.state.showback);
        return (
            <div className="inline square-basic card" onClick={this.props.onClick}>
                {this.state.showback ? this.props.values.back : this.props.values.front}
            </div>
        );
    }
}

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    front: "What are three responsibilities of citizenship?\n" +
                    "a) Being loyal to Canada, recycling newspapers, serving in the navy, army or air force.\n" +
                    "b) Obeying the law, taking responsibility for oneself and one’s family, serving on a jury.\n" +
                    "c) Learning both official languages, voting in elections, belonging to a union.\n" +
                    "d) Buying Canadian products, owning your own business, using less water.",
                    back: "b) Obeying the law, taking responsibility for oneself and one’s family, serving on a jury."
                },
                {
                    front: "What is the meaning of the Remembrance Day poppy?\n" +
                    "a) To remember our Sovereign, Queen Elizabeth II.\n" +
                    "b) To celebrate Confederation.\n" +
                    "c) To honour prime ministers who have died.\n" +
                    "d) To remember the sacrifice of Canadians who have served or died in wars up to the present day.",
                    back: "d) To remember the sacrifice of Canadians who have served or died in wars up to the present day."
                },
                {
                    front: "How are members of Parliament chosen?\n" +
                    "a) They are appointed by the United Nations.\n" +
                    "b) They are chosen by the provincial premiers.\n" +
                    "c) They are elected by voters in their local constituency (riding).\n" +
                    "d) They are elected by landowners and police chiefs.",
                    back: "c) They are elected by voters in their local constituency (riding)."
                }
            ],
            currentCard: 0,
        };
    }

    handleChangeFront = (e) => {
        this.setState({newFront: e.target.value});
    }

    handleChangeBack = (e) => {
        this.setState({newBack: e.target.value});
    }
    
    correctKeep = () => {
        this.setState({
            currentCard: (this.state.currentCard + 1) % this.state.cards.length, 
            showback: false
        });
        console.log('after modifying, currentCard is: ', this.state.currentCard, this.state.showback);
        this.forceUpdate();
    }

    flipCard = () => {
        console.log('flipping card: ', this.state);
        this.setState({showback: !this.state.showback});
    }

    render() {
        console.log('cardToShow: ', this.state.cards[this.state.currentCard], this.state.showback);
        return (
            <div className="container">
                <div className="observe">
                    <Card onClick={this.flipCard} values={this.state.cards[this.state.currentCard]} showback={this.state.showback} />
                </div>
                <div className="interact">
                    <div className="buttonRow">
                        <SlButton onClick={this.correctKeep} className="singleButton button">
                            Next Card
                        </SlButton>
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
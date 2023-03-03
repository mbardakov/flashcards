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
                },
                {
                    front: "Name two key documents that contain our rights and freedoms",
                    back: "the Magna Carta and the Canadian Charter of Rights and Freedoms",
                },
                {
                    front: "Identify four rights that Canadians enjoy",
                    back: "Mobility Rights — Canadians can live and work anywhere they choose in Canada, enter and leave the country freely, and apply for a passport.\n" +
                    "Aboriginal Peoples’ Rights — The rights guaranteed in the Charter will not adversely affect any treaty or other rights or freedoms of Aboriginal peoples.\n" + 
                    "Official Language Rights and Minority Language Educational Rights — French and English have equal status in Parliament and throughout the government.\n" + 
                    "Multiculturalism — A fundamental characteristic of the Canadian heritage and identity. Canadians celebrate the gift of one another’s presence and work hard to respect pluralism and live in harmony\n"
                },
                {
                    front: "Name four fundamental freedoms that canadians enjoy",
                    back: "Freedom of conscience and religion;\n" +
                    "Freedom of thought, belief, opinion and expression, including freedom of speech and of the press;\n" +
                    "Freedom of peaceful assembly\n" +
                    "Freedom of association."
                },
                {
                    front: "What is meant by the equality of women and men?",
                    back: "In Canada, men and women are equal under the law. Canada’s openness and generosity do not extend to barbaric cultural practices that tolerate spousal abuse, “honour killings,” female genital mutilation, forced marriage or other gender-based violence. Those guilty of these crimes are severely punished under Canada’s criminal laws.",
                },
                {
                    front: "What are some examples of taking responsibility for yourself and your family?",
                    back: "Getting a job, taking care of one’s family and working hard in keeping with one’s abilities are important Canadian values. Work contributes to personal dignity and selfrespect, and to Canada’s prosperity.",
                },
                {
                    front: "Who were the founding peoples of Canada?",
                    back: "Aboriginal peoples (First Nations, Inuit, Métis),\n"+
                    "French Canadians (Acadians, Quebecers, people in smaller French-speaking communities across Canada),\n"+
                    "English Canadians",
                },
                {
                    front: "Who are the Métis?",
                    back: "The Métis are a distinct people of mixed Aboriginal and European ancestry, the majority of whom live in the Prairie provinces. They come from both French- and English-speaking backgrounds and speak their own dialect, Michif."
                },
                {
                    front: "What does the word 'Inuit' mean?",
                    back: "'Inuit' means 'the people' in the Inuktitut language"
                },
                {
                    front: "What is meant by the term “responsible government”?",
                    back: "Historically, the term meant 'The ministers of the Crown must have the support of a majority of the elected representatives in order to govern.'\nToday, if the government loses a confidence vote in the assembly it must resign."
                },
                {
                    front: "Who was Sir Louis-Hippolyte La Fontaine?",
                    back: "A champion of French language rights, who became the first head of a responsible government (similar to a prime minister) in Canada in 1849"
                },
                {
                    front: "What did the Canadian Pacific Railway symbolize?",
                    back: "Unity"
                },
                {
                    front: "What does Confederation mean?",
                    back: "From 1864 to 1867, representatives of Nova Scotia, New Brunswick and the Province of Canada, with British support, worked together to establish a new country. They created two levels of government: federal and provincial. The old Province of Canada was split into two new provinces: Ontario and Quebec, which, together with New Brunswick and Nova Scotia, formed the new country called the Dominion of Canada. Each province would elect its own legislature and have control of such areas as education and health."
                },
                {
                    front: "What is the significance of the discovery of insulin by Sir Frederick Banting and Charles Best?",
                    back: " Sir Frederick Banting of Toronto and Charles Best discovered insulin, a hormone to treat diabetes that has saved 16 million lives worldwide"
                },
                {
                    front: "What does it mean to say that Canada is a constitutional monarchy?",
                    back: "Canada's head of state is a hereditary Sovereign (Queen or King) who reigns in accordance with the Constitution: the rule of law."
                },
                {
                    front: "What are the three branches of government?",
                    back: "Executive, Legislative, and Judicial"
                },
                {
                    front: "What is the difference between the role of the Queen and that of the Prime Minister?",
                    back: "The Sovereign is a part of Parliament, playing an important, nonpartisan role as the focus of citizenship and allegiance, most visibly during royal visits to Canada. There is a clear distinction in Canada between the head of state—the Sovereign—and the head of government—the Prime Minister, who actually directs the governing of the country."
                },
                {
                    front: "What is the highest honour that Canadians can receive?",
                    back: "The Victoria Cross (V.C.) is the highest honour available to Canadians and is awarded for the most conspicuous bravery, a daring or pre-eminent act of valour or self-sacrifice, or extreme devotion to duty in the presence of the enemy. The V.C. has been awarded to 96 Canadians since 1854."
                },
                {
                    front: "When you go to vote on election day, what do you do?",
                    back: "The people in each electoral district vote for the candidate and political party of their choice. The candidate who receives the most votes becomes the MP for that electoral district."
                },
                {
                    front: "Who is entitled to vote in Canadian federal elections?",
                    back: "You are eligible to vote in a federal election or cast a ballot in a federal referendum if you are:\n" +
                    "• a Canadian citizen; and\n" + 
                    "• at least 18 years old on voting day; and\n" + 
                    "• on the voters’ list.\n" + 
                    "The voters’ lists used during federal elections and referendums are produced from the National Register of Electors by a neutral agency of Parliament called Elections Canada. This is a permanent database of Canadian citizens 18 years of age or older who are qualified to vote in federal elections and referendums."
                },
                {
                    front: "In Canada, are you obliged to tell other people how you voted?",
                    back: "No. Canadian law secures the right to a secret ballot. This means that no one can watch you vote and no one should look at how you voted. You may choose to discuss how you voted with others, but no one, including family members, your employer or union representative, has the right to insist that you tell them how you voted."
                },
                {
                    front: "After an election, which party forms the government?",
                    back: "Ordinarily, after an election, the leader of the political party with the most seats in the House of Commons is invited by the Governor General to form the government."
                },
                {
                    front: "Who is your member of Parliament?",
                    back: "Tim Louis, Kitchener-Constoga, Ontario (his office is across the street from us, at the plaza with the optometrist)"
                },
                {
                    front: "What are the three levels of government?",
                    back: "Local (or Municipal), Provincial, and Federal"
                },
                {
                    front: "What is the role of the courts in Canada?",
                    back: "Canada is governed by an organized system of laws. These laws are the written rules intended to guide people in our society. The courts settle disputes and the police enforce the laws."
                },
                {
                    front: "In Canada, are you allowed to question the police about their service or conduct?",
                    back: "You can also question the police about their service or conduct if you feel you need to. Almost all police forces in Canada have a process by which you can bring your concerns to the police and seek action."
                },
                {
                    front: "Name two Canadian symbols.",
                    back: "Possible answers:\n" + 
                    "• The Canadian Crown,\n"+
                    "• The Maple Leaf,\n"+
                    "• The Fleur-de-lys,\n"+
                    "• The Coat of Arms & Motto,\n"+
                    "• The Beaver\n"
                },
                {
                    front: "What provinces are sometimes referred to as the Atlantic Provinces?",
                    back: "Newfoundland and Labrador, Prince Edward Island (PEI), Nova Scotia, and New Bruinswick"
                },
                {
                    front: "What is the capital of the province or territory that you live in?",
                    back: "Toronto"
                },
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
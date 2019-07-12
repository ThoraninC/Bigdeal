import React from 'react';
import ReactDOM from 'react-dom';


class card extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            suit: null,
            rank: null,
        }
    }

    skin_switch(card_skin){
        switch(card_skin){
            case "standard":
                return "\\Playing_Cards\\PNG-cards-1.3";
            default:
                return "\\Playing_Cards\\PNG-cards-1.3";
        }

    }

    suffix_switch(card_skin){
        switch(card_skin){
            case "standard":
                return ".png";
            default:
                return ".png";
        }
    }

    rank_switch(rank){
        switch(rank){
            case "A":
                return "ace_of";
            case "2":
                return "2_of";
            case "3":
                return "3_of";
            case "4":
                return "4_of";
            case "5":
                return "5_of";
            case "6":
                return "6_of";
            case "7":
                return "7_of";
            case "8":
                return "8_of";
            case "9":
                return "9_of";
            case "T":
                return "10_of";
            case "J":
                return "jack2_of";
            case "Q":
                return "queen2_of";
            case "K":
                return "king2_of";
            default:
                return null;
        }
    }

    suit_switch(suit){
        switch(suit){
            case "C":
                return "_clubs";
            case "D":
                return "_diamonds";
            case "H":
                return "_hearts";
            case "S":
                return "_spades";
            default:
                return null;
        }
    }

    getcard_pic(card_skin,rank,suit){

        var cardpicture;
            cardpicture += this.skin_switch(card_skin);
            cardpicture += this.rank_switch(rank);
            cardpicture += this.suit_switch(suit);
            cardpicture += this.suffix_switch(card_skin);
       
        return <img src={cardpicture} alt="Logo" />;
    }

    render(props){
        return this.getcard_pic(this.props.card_skin,this.props.rank,this.props.suit);
    }
}

class deck extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cards: [{
                suit: null,
                rank: null,
            }].array(52)
        }

        for(let i;i<4;i++){

            for(let j;j<13;j++){

                switch (i){
                    case 0:
                        this.state.cards[i*13+j].suit = "C";
                        break;
                    case 1:
                        this.state.cards[i*13+j].suit = "D";
                        break;
                    case 2:
                        this.state.cards[i*13+j].suit = "H";
                        break;
                    case 3:
                        this.state.cards[i*13+j].suit = "S";
                        break;
                    default:
                        this.state.cards[i*13+j].suit = "null";
                }

                switch (j){
                    case 0:
                        this.state.cards[i*13+j].rank = "A";
                        break;
                    case 1:
                        this.state.cards[i*13+j].rank = "2";
                        break;
                    case 2:
                        this.state.cards[i*13+j].rank = "3";
                        break;
                    case 3:
                        this.state.cards[i*13+j].rank = "4";
                        break;
                    case 4:
                        this.state.cards[i*13+j].rank = "5";
                        break;
                    case 5:
                        this.state.cards[i*13+j].rank = "6";
                        break;
                    case 6:
                        this.state.cards[i*13+j].rank = "7";
                        break;
                    case 7:
                        this.state.cards[i*13+j].rank = "8";
                        break;
                    case 8:
                        this.state.cards[i*13+j].rank = "9";
                        break;
                    case 9:
                        this.state.cards[i*13+j].rank = "T";
                        break;
                    case 10:
                        this.state.cards[i*13+j].rank = "J";
                        break;
                    case 11:
                        this.state.cards[i*13+j].rank = "Q";
                        break;
                    case 12:
                        this.state.cards[i*13+j].rank = "K";
                        break;
                    default:
                        this.state.cards[i*13+j].rank = "null";

                }
            }
        }
    }

    popcard(i){
        //this.props.card
    }

    // searchcard(){

    // }


    render(){
        return ;
    }

}

// ========================================
  
ReactDOM.render(
    document.getElementById('root')
);
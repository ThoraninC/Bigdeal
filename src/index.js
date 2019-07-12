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

       

        switch(this.state.rank){

        }


        return <img src={cardpicture} alt="Logo" />;
    }
}

// ========================================
  
ReactDOM.render(
    document.getElementById('root')
);
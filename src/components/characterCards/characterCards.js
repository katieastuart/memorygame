import React, { Component } from "react";
import "./characterCards.css";

class CharacterCards extends Component {
    render() {
        // console.log(this.props)
        return(
            <div className="col-lg-3">
            <div className="card">
                    <button className="btn">
                        <img className="card-img-top" alt={this.props.name} src={this.props.image} clicked={this.props.clicked} onClick={this.props.handleClick} />
                    </button>
                </div>
            </div>
        )
    }
}



export default CharacterCards;



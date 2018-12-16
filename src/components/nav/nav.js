import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {

render() {
return (
    <div className="nav-bar">
        <ul className="nav navbar-expand-lg navbar-dark nav-fill">
            <li className="brand nav-item">
                <a className="nav-link" href="/">Gilmore Girls Memory Game</a>
            </li>
            <li className="brand nav-item">
                {this.props.data.message}
            </li>
            <li className="brand nav-item">
                Score: {this.props.data.currentScore} | Top Score: {this.props.data.topScore}
            </li>
        </ul>
    </div>
);
}
}

export default Nav;

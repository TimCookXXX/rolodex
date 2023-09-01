import { Component } from "react";
import './index.css';

class Card extends Component {
    render() {
        const { monsters } = this.props
        const { name, id, email } = monsters
        return (
            <div className="card-container">
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card;
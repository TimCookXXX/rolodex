import { Component } from "react";
import './index.css';
import Card from "../card";

class CardList extends Component {
    render() {
        console.log(this.props)
        console.log('render CardList');
        const { monsters } = this.props 
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    return (
                        <Card key={monster.id} monsters={monster} />
                    )
                })}
            </div>
        )
    }
}

export default CardList;
import './index.css';
import Card from "../card";

const CardList = ({ monsters }) => {
        console.log('render CardList')
        
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

export default CardList;
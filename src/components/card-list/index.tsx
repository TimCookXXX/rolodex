import "./index.css";
import Card from "../card";
import { Monster } from "../../App";

interface CardListProps {
    monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => {
                return <Card key={monster.id} monsters={monster} />;
            })}
        </div>
    );
};

export default CardList;

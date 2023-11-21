import "./index.css";
import { Monster } from "../../App";

interface CardProps {
    monsters: Monster;
}

const Card = ({ monsters }: CardProps) => {
    const { name, id, email } = monsters;

    return (
        <div className="card-container">
            <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={`${name}`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;

import './Card.css';

export default function Card({key, title, img, gender, status}) {
    return(
        <div className="card">
                <img className="img__Card" src={img} alt={key}/>
                <div className="card-body">
                    <h3 class="card-title">{title}</h3>
                    <p class="card-text">Gender: {gender}</p>
                    <p class="card-text">Status: {status}</p>
                </div>
        </div>
    );
}
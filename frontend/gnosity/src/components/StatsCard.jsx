import "./style/card.css";
import "./style/statsCard.css";


const StatsCard = () => {
    return (
        <div className="card" id="stats">
            <div className="title">STATS</div>
            <div className='stats'>
                <span className="progress-bar"></span>
                <div className='text'><p>Creativity</p></div>
            </div>
            <div className='stats'>
                <span className="progress-bar"></span>
                <div className='text'><p>Health</p></div>
            </div>
            <div className='stats'>
                <span className="progress-bar"></span>
                <div className='text'><p>Knowledge</p></div>
            </div>
            <div className='stats'>
                <span className="progress-bar"></span>
                <div className='text'><p>Productivty</p></div>

            </div>
        </div>
    )
}

export default StatsCard;

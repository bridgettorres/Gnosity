import "./style/card.css";
import "./style/statsCard.css";
import "./style/rankingCard.css";


const RankingCard = () => {
    return (
        <div className="card" id="ranking">
            <div className="title">RANKING</div>
            <div className='ranking'>
                <div className='rank'>
                    <div className='ranknum'>1</div>
                    <div className='username'><p>User1234</p></div>
                    <div className='level'><p>lvl 1</p></div>
                </div>

            </div>
        </div>
    )
}

export default RankingCard;
